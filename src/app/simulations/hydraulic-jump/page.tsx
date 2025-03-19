import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"

export default function HydraulicJumpPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Hydraulic Jump Simulation</h1>
          <p className="text-xl text-muted-foreground">
            Observe the abrupt change from supercritical to subcritical flow
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center text-white">
                  <p className="text-center">
                    Hydraulic Jump Simulation<br />
                    <span className="text-sm opacity-75">(Interactive simulation coming soon)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is a Hydraulic Jump?</CardTitle>
                <CardDescription>
                  A fascinating phenomenon in open channel flow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  A hydraulic jump is a phenomenon that occurs in open channel flow when a fast-flowing
                  stream (supercritical flow) abruptly transitions to a slower, deeper flow (subcritical flow).
                  This transition is characterized by a sudden increase in water depth and a significant
                  dissipation of energy.
                </p>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Key Parameters:</h4>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span><strong>Froude Number (Fr)</strong>: Ratio of inertial to gravitational forces</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span><strong>Flow Depth</strong>: Before and after the jump</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span><strong>Energy Dissipation</strong>: Loss across the jump</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Real-World Examples:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Dam spillways and stilling basins</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Irrigation channels and canals</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>River rapids and white water features</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Kitchen sink when water hits a flat surface</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Understand the transition between supercritical and subcritical flow regimes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Visualize the relationship between flow velocity, depth, and the Froude number</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Analyze energy dissipation across a hydraulic jump</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>The Science Explained</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <h3>Hydraulic Jump Mechanics</h3>

            <p>
              A hydraulic jump occurs when water flowing at a supercritical state (Fr {'>'}  1, where velocity dominates
              gravitational effects) transitions to a subcritical state (Fr {'<'} 1, where gravitational effects dominate
              velocity).
            </p>

            <p>
              The Froude number (Fr) is defined as:
            </p>

            <div className="bg-muted p-3 rounded-md my-3 text-center">
              <p className="font-mono">Fr = v/√(gd)</p>
              <p className="text-xs mt-1">
                Where v is flow velocity, g is gravitational acceleration, and d is flow depth
              </p>
            </div>

            <p>
              In a hydraulic jump, several important changes occur:
            </p>

            <ol>
              <li><strong>Depth increase</strong> - Water depth abruptly increases from a shallow, fast flow to a deeper, slower flow</li>
              <li><strong>Velocity decrease</strong> - Flow velocity decreases significantly across the jump</li>
              <li><strong>Energy dissipation</strong> - Mechanical energy is converted to heat and sound through turbulence</li>
              <li><strong>Surface turbulence</strong> - Characterized by rolling, churning water with air entrainment</li>
            </ol>

            <h3>The Conjugate Depth Relationship</h3>

            <p>
              The relationship between depths before (d₁) and after (d₂) the jump can be derived from the momentum equation:
            </p>

            <div className="bg-muted p-3 rounded-md my-3 text-center">
              <p className="font-mono">d₂/d₁ = ½(√(1 + 8Fr₁²) - 1)</p>
            </div>

            <p>
              This relationship shows that as the upstream Froude number increases, the ratio of downstream to
              upstream depths increases, resulting in a more pronounced jump.
            </p>

            <h3>Engineering Significance</h3>

            <p>
              Hydraulic jumps are intentionally designed into hydraulic structures to:
            </p>

            <ul>
              <li>Dissipate excess energy in fast-flowing water to prevent erosion downstream</li>
              <li>Trap sediment and debris in the turbulent region</li>
              <li>Increase water depth to required levels for downstream conditions</li>
              <li>Enhance aeration and oxygen transfer in the water</li>
            </ul>

            <p>
              In the upcoming interactive simulation, you'll be able to adjust flow rate and channel geometry to
              see how these parameters affect the formation and characteristics of hydraulic jumps.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
