"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Slider } from "./ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Play, Pause, RefreshCw } from "lucide-react"

// Define a proper type for particles
type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export function SimulationDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(true)
  const [viscosity, setViscosity] = useState([0.5])
  const [velocity, setVelocity] = useState([0.5])
  const [isClient, setIsClient] = useState(false)
  const animationRef = useRef<number | null>(null)

  // Simulation parameters
  const particleCountRef = useRef(150)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    setIsClient(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      // Clear previous particles
      particlesRef.current = []

      // Create particles
      for (let i = 0; i < particleCountRef.current; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * velocity[0] * 3,
          vy: (Math.random() - 0.5) * velocity[0] * 3,
          radius: Math.random() * 4 + 1,
          color: `hsla(${190 + Math.random() * 30}, 80%, 60%, 0.7)`
        })
      }
    }

    const draw = () => {
      if (!isRunning) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
          animationRef.current = null
        }
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw obstacles for fluid to flow around
      drawObstacles(ctx, canvas)

      // Apply fluid behavior to particles
      updateParticles(canvas)

      // Draw particles
      drawParticles(ctx)

      animationRef.current = requestAnimationFrame(draw)
    }

    const drawObstacles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      // Draw a circular obstacle in the center
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(100, 100, 100, 0.5)'
      ctx.fill()

      // Draw a rectangular obstacle near the bottom
      ctx.fillRect(canvas.width / 4, canvas.height - 80, 100, 20)
    }

    const updateParticles = (canvas: HTMLCanvasElement) => {
      const particles = particlesRef.current
      const viscosityFactor = 1 - viscosity[0] * 0.5 // Higher viscosity = slower movement

      particles.forEach(particle => {
        // Apply velocity
        particle.x += particle.vx * velocity[0] * 2
        particle.y += particle.vy * velocity[0] * 2

        // Apply viscosity (damping)
        particle.vx *= viscosityFactor
        particle.vy *= viscosityFactor

        // Add a small random movement for natural flow
        particle.vx += (Math.random() - 0.5) * 0.1
        particle.vy += (Math.random() - 0.5) * 0.1

        // Boundary bouncing
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = particle.x < 0 ? 0 : canvas.width
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = particle.y < 0 ? 0 : canvas.height
        }

        // Obstacle collision with circle
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const dx = particle.x - centerX
        const dy = particle.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 40 + particle.radius) {
          // Calculate reflection vector
          const nx = dx / distance
          const ny = dy / distance
          const dotProduct = particle.vx * nx + particle.vy * ny

          particle.vx = particle.vx - 2 * dotProduct * nx
          particle.vy = particle.vy - 2 * dotProduct * ny

          // Move particle outside the obstacle
          const pushDistance = 40 + particle.radius - distance
          particle.x += nx * pushDistance
          particle.y += ny * pushDistance
        }

        // Obstacle collision with rectangle
        const rectX = canvas.width / 4
        const rectY = canvas.height - 80
        const rectWidth = 100
        const rectHeight = 20

        if (
          particle.x + particle.radius > rectX &&
          particle.x - particle.radius < rectX + rectWidth &&
          particle.y + particle.radius > rectY &&
          particle.y - particle.radius < rectY + rectHeight
        ) {
          // Simple bounce - more accurate collision would be more complex
          if (particle.x < rectX || particle.x > rectX + rectWidth) {
            particle.vx *= -0.8
          } else {
            particle.vy *= -0.8
          }

          // Push particle outside the obstacle
          if (particle.x < rectX) particle.x = rectX - particle.radius
          if (particle.x > rectX + rectWidth) particle.x = rectX + rectWidth + particle.radius
          if (particle.y < rectY) particle.y = rectY - particle.radius
          if (particle.y > rectY + rectHeight) particle.y = rectY + rectHeight + particle.radius
        }
      })
    }

    const drawParticles = (ctx: CanvasRenderingContext2D) => {
      const particles = particlesRef.current

      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections between nearby particles for a fluid effect
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.05)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Initialize and start animation
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning, viscosity, velocity])

  const handleReset = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Reset particles
    particlesRef.current = []
    for (let i = 0; i < particleCountRef.current; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * velocity[0] * 3,
        vy: (Math.random() - 0.5) * velocity[0] * 3,
        radius: Math.random() * 4 + 1,
        color: `hsla(${190 + Math.random() * 30}, 80%, 60%, 0.7)`
      })
    }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interactive Simulation</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Experience fluid dynamics in action with this interactive demo
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 order-2 lg:order-1">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="w-full h-[400px] relative">
                  {isClient && <canvas ref={canvasRef} className="w-full h-full" />}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle>Simulation Controls</CardTitle>
                <CardDescription>
                  Adjust parameters to see how they affect fluid behavior
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Viscosity</span>
                    <span className="text-sm text-muted-foreground">{(viscosity[0] * 100).toFixed(0)}%</span>
                  </div>
                  <Slider
                    value={viscosity}
                    onValueChange={setViscosity}
                    max={1}
                    step={0.01}
                    className="[&>span:first-child]:h-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Higher values make the fluid thicker and slower</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Flow Velocity</span>
                    <span className="text-sm text-muted-foreground">{(velocity[0] * 100).toFixed(0)}%</span>
                  </div>
                  <Slider
                    value={velocity}
                    onValueChange={setVelocity}
                    max={1}
                    step={0.01}
                    className="[&>span:first-child]:h-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Controls the speed of fluid movement</p>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setIsRunning(!isRunning)}
                    variant="outline"
                    className="flex-1"
                  >
                    {isRunning ? (
                      <><Pause className="mr-2 h-4 w-4" /> Pause</>
                    ) : (
                      <><Play className="mr-2 h-4 w-4" /> Play</>
                    )}
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" /> Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learn More</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This simulation demonstrates basic fluid dynamics concepts including:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Particle movement and flow</li>
                  <li>Effects of viscosity on fluid behavior</li>
                  <li>Object interaction with fluid flow</li>
                  <li>Boundary conditions and collision physics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
