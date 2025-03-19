"use client"

import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, TestTube, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }> = []

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // Create particles
      particles = Array(50).fill(null).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 5 + 2,
        color: `hsla(${Math.random() * 60 + 190}, 80%, 60%, 0.7)`
      }))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Apply fluid-like behavior
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check with bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections between particles for a fluid-like effect
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {isClient && <canvas ref={canvasRef} className="w-full h-full" />}
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Learn Fluid Mechanics <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Interactively</span>
              </motion.h1>
              <motion.p
                className="max-w-[700px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Explore the fascinating world of fluid mechanics through interactive lessons, visual examples, and practical tests.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/basics" passHref>
                <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/simulations" passHref>
                <Button variant="outline">Explore Simulations</Button>
              </Link>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Comprehensive Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <TestTube className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Interactive Simulations</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Knowledge Tests</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-background md:w-full lg:w-3/4 xl:w-full">
              <img
                alt="Fluid simulation example"
                className="object-cover"
                height="500"
                src="https://cdn-images.zety.com/pages/entry_level_mechanical_engineer_resume_example_zety_us_3.jpg"
                width="800"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
