import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"

export default function BernoulliEffectPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Bernoulli Effect Simulation</h1>
          <p className="text-xl text-muted-foreground">
            Visualize how fluid velocity affects pressure in a flow
          </p>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Card className="overflow-hidden border-2">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <p className="text-center">
                    Bernoulli Effect Simulation<br />
                    <span className="text-sm opacity-75">(Interactive simulation coming soon)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bernoulli's Principle</CardTitle>
                <CardDescription>
                  Understanding the relationship between fluid velocity and pressure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Bernoulli's principle states that an increase in the speed of a fluid occurs simultaneously with
                  a decrease in the fluid's pressure or potential energy.
                </p>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">Key Equation:</h4>
                  <div className="text-center font-mono text-sm">
                    P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Where P is pressure, ρ is density, v is velocity, g is gravitational acceleration, and h is height
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Applications:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Airplane wings and lift generation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Venturi tubes and flow measurement</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span>Carburetors in engines</span>
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
                    <span>Understand the inverse relationship between fluid velocity and pressure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Visualize pressure changes in a constricted flow</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Apply Bernoulli's equation to predict fluid behavior</span>
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
            <p>
              Bernoulli's principle is a consequence of the conservation of energy in fluid flow. In an ideal fluid
              (ignoring viscosity and other energy losses), the total energy at any point remains constant. This
              energy consists of:
            </p>

            <ul>
              <li><strong>Pressure energy</strong> (P)</li>
              <li><strong>Kinetic energy</strong> (½ρv²)</li>
              <li><strong>Potential energy</strong> (ρgh)</li>
            </ul>

            <p>
              When a fluid flows through a constricted section of pipe, its velocity must increase to maintain the
              same flow rate (due to the continuity equation: A₁v₁ = A₂v₂). This increase in velocity corresponds to
              an increase in kinetic energy, which must be balanced by a decrease in pressure energy to keep the
              total energy constant.
            </p>

            <p>
              This principle explains many phenomena we observe in everyday life, such as why airplanes can fly
              (faster air over the curved top of the wing creates lower pressure compared to the bottom) and why
              shower curtains move inward when the shower is on (faster moving air inside the shower creates
              lower pressure than the still air outside).
            </p>

            <p>
              The interactive simulation will allow you to adjust the pipe diameter and flow rate to see how
              these parameters affect the fluid velocity and pressure at different points in the system.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
