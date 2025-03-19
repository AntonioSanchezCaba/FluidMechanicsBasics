import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"

export default function PipeFlowPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Pipe Flow Analysis</h1>
          <p className="text-xl text-muted-foreground">
            Study the behavior of fluid flowing through pipes of different shapes
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-r from-red-600 to-rose-600 rounded-lg flex items-center justify-center text-white">
                  <p className="text-center">
                    Pipe Flow Simulation<br />
                    <span className="text-sm opacity-75">(Interactive simulation coming soon)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pipe Flow Fundamentals</CardTitle>
                <CardDescription>
                  Understanding fluid transport through conduits
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Pipe flow is one of the most common and important applications of fluid mechanics. It involves the
                  transport of fluids through enclosed conduits under pressure, and is fundamental to numerous
                  engineering systems from municipal water distribution to industrial processes.
                </p>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Key Concepts:</h4>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span><strong>Head Loss</strong>: Energy dissipation due to friction and other factors</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span><strong>Friction Factor</strong>: Parameter quantifying pipe surface roughness</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span><strong>Reynolds Number</strong>: Determines laminar vs. turbulent flow regime</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span><strong>Pressure Drop</strong>: Loss of pressure along pipe length</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Applications:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Water distribution systems</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Oil and gas pipelines</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>HVAC systems</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Blood flow in vessels</span>
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
                    <span>Calculate pressure drop and head loss in pipe systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Understand how pipe diameter, length, and roughness affect flow behavior</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Analyze the impact of minor losses from valves, fittings, and transitions</span>
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
            <h3>Pipe Flow Regimes</h3>

            <p>
              Pipe flow can be classified as either laminar or turbulent based on the Reynolds number:
            </p>

            <div className="bg-muted p-3 rounded-md my-3 text-center">
              <p className="font-mono">Re = ρvD/μ = vD/ν</p>
              <p className="text-xs mt-1">
                Where ρ is density, v is velocity, D is pipe diameter, μ is dynamic viscosity, and ν is kinematic viscosity
              </p>
            </div>

            <ul>
              <li><strong>Laminar flow</strong> (Re {'<'} 2300): Fluid particles move in smooth, parallel layers with minimal mixing</li>
              <li><strong>Transition</strong> (2300 {'<'} Re {'<'} 4000): Flow fluctuates between laminar and turbulent</li>
              <li><strong>Turbulent flow</strong> (Re {'>'}  4000): Chaotic, irregular fluid motion with significant mixing</li>
            </ul>

            <h3>Head Loss in Pipes</h3>

            <p>
              Head loss in pipe flow consists of two main components:
            </p>

            <ol>
              <li>
                <strong>Major losses</strong> due to friction along the pipe length, calculated using the Darcy-Weisbach equation:
                <div className="bg-muted p-3 rounded-md my-3 text-center">
                  <p className="font-mono">h<sub>L</sub> = f × (L/D) × (v²/2g)</p>
                  <p className="text-xs mt-1">
                    Where f is friction factor, L is pipe length, D is diameter, v is velocity, and g is gravitational acceleration
                  </p>
                </div>
              </li>
              <li>
                <strong>Minor losses</strong> due to pipe fittings, valves, bends, contractions, and expansions:
                <div className="bg-muted p-3 rounded-md my-3 text-center">
                  <p className="font-mono">h<sub>minor</sub> = K × (v²/2g)</p>
                  <p className="text-xs mt-1">
                    Where K is the loss coefficient specific to each fitting or component
                  </p>
                </div>
              </li>
            </ol>

            <h3>Friction Factor Determination</h3>

            <p>
              The friction factor (f) depends on the flow regime:
            </p>

            <ul>
              <li>
                <strong>Laminar flow</strong>: f = 64/Re
              </li>
              <li>
                <strong>Turbulent flow</strong>: Determined using the Colebrook equation or Moody diagram, which relates f to the Reynolds number and relative pipe roughness (ε/D)
              </li>
            </ul>

            <h3>Practical Considerations</h3>

            <p>
              Understanding pipe flow is crucial for:
            </p>

            <ul>
              <li>Sizing pumps to overcome pressure losses</li>
              <li>Determining appropriate pipe diameters for required flow rates</li>
              <li>Analyzing pressure distribution in complex pipe networks</li>
              <li>Predicting energy costs for fluid transport systems</li>
              <li>Designing efficient systems with minimal energy consumption</li>
            </ul>

            <p>
              In the upcoming interactive simulation, you'll be able to modify pipe parameters like diameter, length,
              roughness, and flow rate to observe how they affect pressure drop, velocity profiles, and energy losses in the system.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
