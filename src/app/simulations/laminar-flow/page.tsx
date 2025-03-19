"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronLeft, Play, Pause, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function LaminarFlowSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRunning, setIsRunning] = useState(true)
  const [reynoldsNumber, setReynoldsNumber] = useState([5])
  const [viscosity, setViscosity] = useState([0.8])
  const [isClient, setIsClient] = useState(false)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    setIsClient(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const drawLaminarFlow = () => {
      if (!isRunning) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
          animationRef.current = null
        }
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Parameters
      const numLayers = 20
      const pipeHeight = canvas.height * 0.8
      const pipeY = (canvas.height - pipeHeight) / 2
      const maxSpeed = reynoldsNumber[0] * 2

      // Draw pipe boundaries
      ctx.beginPath()
      ctx.strokeStyle = '#666'
      ctx.lineWidth = 2
      ctx.moveTo(0, pipeY)
      ctx.lineTo(canvas.width, pipeY)
      ctx.moveTo(0, pipeY + pipeHeight)
      ctx.lineTo(canvas.width, pipeY + pipeHeight)
      ctx.stroke()

      // Draw velocity profile
      const layerHeight = pipeHeight / numLayers

      for (let i = 0; i < numLayers; i++) {
        const yPos = pipeY + i * layerHeight

        // Calculate velocity based on position (parabolic profile)
        // Normalized position from -1 (bottom) to 1 (top)
        const normalizedY = 2 * (i / numLayers) - 1

        // Velocity is maximum at center, zero at walls
        const velocityFactor = 1 - normalizedY * normalizedY
        const speed = velocityFactor * maxSpeed * (1 / (viscosity[0] + 0.2))

        // Interpolate color based on speed
        const r = Math.min(255, Math.floor(speed * 25))
        const g = Math.min(255, Math.floor(50 + speed * 10))
        const b = Math.min(255, Math.floor(150 + speed * 10))

        // Draw flow layer
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.8)`
        ctx.fillRect(0, yPos, canvas.width, layerHeight)

        // Draw flow particles
        const numParticles = 5
        const particleSpacing = canvas.width / numParticles

        for (let j = 0; j < numParticles; j++) {
          // Particle position affected by time and layer velocity
          const time = Date.now() / 1000
          const xOffset = (time * speed * 20 + j * particleSpacing) % canvas.width

          ctx.beginPath()
          ctx.arc(xOffset, yPos + layerHeight / 2, 2, 0, Math.PI * 2)
          ctx.fillStyle = 'white'
          ctx.fill()
        }
      }

      // Draw velocity profile curve
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.lineWidth = 2

      const centerY = pipeY + pipeHeight / 2
      const maxWidth = canvas.width / 4

      ctx.moveTo(canvas.width / 2, pipeY)

      for (let y = 0; y <= pipeHeight; y += 5) {
        const normalizedY = 2 * (y / pipeHeight) - 1
        const velocityFactor = 1 - normalizedY * normalizedY
        const speed = velocityFactor * maxSpeed * (1 / (viscosity[0] + 0.2))
        const x = canvas.width / 2 + speed * maxWidth

        ctx.lineTo(x, pipeY + y)
      }

      ctx.lineTo(canvas.width / 2, pipeY + pipeHeight)
      ctx.stroke()

      // Add labels
      ctx.font = '12px Arial'
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.fillText('Velocity Profile', canvas.width / 2, pipeY - 10)

      animationRef.current = requestAnimationFrame(drawLaminarFlow)
    }

    drawLaminarFlow()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning, reynoldsNumber, viscosity])

  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center space-x-4">
          <Link href="/simulations">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Simulations
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Laminar Flow Simulation</h1>
          <p className="text-xl text-muted-foreground">
            Visualize and experiment with the characteristics of smooth, layered fluid flow
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="w-full h-[400px] relative bg-slate-900">
                  {isClient && <canvas ref={canvasRef} className="w-full h-full" />}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Simulation Controls</CardTitle>
                <CardDescription>
                  Adjust parameters to see how they affect the laminar flow behavior
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Reynolds Number</span>
                    <span className="text-sm text-muted-foreground">{reynoldsNumber[0]}</span>
                  </div>
                  <Slider
                    value={reynoldsNumber}
                    onValueChange={setReynoldsNumber}
                    min={1}
                    max={10}
                    step={0.1}
                    className="[&>span:first-child]:h-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Controls the ratio of inertial to viscous forces in the fluid
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Viscosity</span>
                    <span className="text-sm text-muted-foreground">{viscosity[0]}</span>
                  </div>
                  <Slider
                    value={viscosity}
                    onValueChange={setViscosity}
                    min={0.1}
                    max={1}
                    step={0.05}
                    className="[&>span:first-child]:h-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Adjusts the thickness or resistance to flow of the fluid
                  </p>
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
                    onClick={() => {
                      setReynoldsNumber([5])
                      setViscosity([0.8])
                    }}
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
                <CardTitle>What You're Seeing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This simulation shows laminar flow through a pipe. In laminar flow:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Fluid flows in parallel layers with minimal mixing</li>
                  <li>Velocity is highest at the center and zero at the walls</li>
                  <li>The velocity profile forms a parabolic shape</li>
                  <li>Flow is stable and predictable at low Reynolds numbers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="theory" className="mt-8">
          <TabsList>
            <TabsTrigger value="theory">Theory</TabsTrigger>
            <TabsTrigger value="equations">Equations</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
          <TabsContent value="theory" className="p-4 bg-muted/50 rounded-md mt-4">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h3>Laminar Flow Theory</h3>
              <p>
                Laminar flow occurs when a fluid flows in parallel layers, with no disruption between the layers.
                In this flow regime, fluid particles move along smooth paths in layers, with each layer sliding past adjacent layers with minimal mixing.
              </p>
              <p>
                The key characteristics of laminar flow include:
              </p>
              <ul>
                <li><strong>Orderly flow patterns</strong> - Fluid particles follow predictable, smooth paths</li>
                <li><strong>Low Reynolds numbers</strong> - Typically less than 2000 for pipe flow</li>
                <li><strong>Viscous forces dominate</strong> - Inertial forces are less significant</li>
                <li><strong>Parabolic velocity profile</strong> - Maximum velocity at center, zero at walls</li>
              </ul>
              <p>
                The transition from laminar to turbulent flow occurs as the Reynolds number increases, which can happen due to higher velocity,
                lower viscosity, or increased pipe diameter.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="equations" className="p-4 bg-muted/50 rounded-md mt-4">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h3>Key Equations</h3>

              <h4>Reynolds Number</h4>
              <div className="bg-muted p-3 rounded-md my-3 text-center">
                <p className="font-mono">Re = ρvD/μ</p>
              </div>
              <p>
                Where:
              </p>
              <ul>
                <li>Re = Reynolds number (dimensionless)</li>
                <li>ρ = fluid density (kg/m³)</li>
                <li>v = fluid velocity (m/s)</li>
                <li>D = pipe diameter (m)</li>
                <li>μ = dynamic viscosity (Pa·s)</li>
              </ul>

              <h4>Velocity Profile in a Pipe</h4>
              <div className="bg-muted p-3 rounded-md my-3 text-center">
                <p className="font-mono">v(r) = v_max [1 - (r/R)²]</p>
              </div>
              <p>
                Where:
              </p>
              <ul>
                <li>v(r) = velocity at radius r (m/s)</li>
                <li>v_max = maximum velocity at center (m/s)</li>
                <li>r = radial distance from center (m)</li>
                <li>R = pipe radius (m)</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="applications" className="p-4 bg-muted/50 rounded-md mt-4">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h3>Real-World Applications</h3>
              <p>
                Understanding laminar flow is crucial for many engineering and scientific applications:
              </p>
              <ul>
                <li>
                  <strong>Microfluidic devices</strong> - Small-scale fluid handling devices rely on laminar flow for precise control
                </li>
                <li>
                  <strong>Pharmaceutical production</strong> - Controlled mixing and separation processes
                </li>
                <li>
                  <strong>Oil pipelines</strong> - Design for optimal flow characteristics to reduce pumping costs
                </li>
                <li>
                  <strong>Blood flow in capillaries</strong> - Blood typically exhibits laminar flow in small vessels
                </li>
                <li>
                  <strong>HVAC systems</strong> - Air flow in ducts can be laminar under certain conditions
                </li>
                <li>
                  <strong>Aerodynamic design</strong> - Maintaining laminar flow over wings reduces drag
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
