import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function FluidDynamicsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center space-x-4">
          <Link href="/basics">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Modules
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <div className="text-sm text-muted-foreground">Module 3 of 4</div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Fluid Dynamics</h1>
          <p className="text-xl text-muted-foreground">
            Explore fluid in motion, including flow types and behavior
          </p>
        </div>

        <Tabs defaultValue="introduction" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="types">Flow Types</TabsTrigger>
            <TabsTrigger value="conservation">Conservation Laws</TabsTrigger>
            <TabsTrigger value="bernoulli">Bernoulli's Equation</TabsTrigger>
            <TabsTrigger value="pipe-flow">Pipe Flow</TabsTrigger>
            <TabsTrigger value="dimensional">Dimensional Analysis</TabsTrigger>
          </TabsList>

          {/* Introduction Tab */}
          <TabsContent value="introduction" className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">Fluid Dynamics Overview</h2>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    <strong>Fluid dynamics</strong> is the study of fluids (liquids and gases) in motion. It examines how
                    fluids flow and how they interact with solid boundaries, focusing on the forces acting on fluid
                    particles and the resulting flow patterns and behaviors.
                  </p>

                  <p>
                    Understanding fluid dynamics is essential for solving numerous engineering problems, from designing
                    efficient aircraft wings and propellers to optimizing pipeline systems, predicting weather patterns,
                    and modeling blood flow in the human body.
                  </p>

                  <p>
                    The key principles and concepts in fluid dynamics include:
                  </p>

                  <ul>
                    <li><strong>Flow classification</strong> - Steady vs. unsteady, laminar vs. turbulent, compressible vs. incompressible</li>
                    <li><strong>Conservation laws</strong> - Conservation of mass, momentum, and energy</li>
                    <li><strong>Bernoulli's equation</strong> - Relationship between pressure, velocity, and elevation in fluid flow</li>
                    <li><strong>Boundary layer theory</strong> - Fluid behavior near solid boundaries</li>
                    <li><strong>Dimensional analysis</strong> - Using dimensionless parameters to analyze complex flow problems</li>
                  </ul>

                  <p>
                    Fluid dynamics can be approached through three main methods:
                  </p>

                  <ul>
                    <li><strong>Theoretical analysis</strong> - Mathematical models based on fundamental physical principles</li>
                    <li><strong>Experimental fluid dynamics</strong> - Laboratory testing and measurement of flow phenomena</li>
                    <li><strong>Computational fluid dynamics (CFD)</strong> - Numerical simulation of fluid flow using computers</li>
                  </ul>
                </div>

                <div className="bg-muted rounded-md p-4 mt-6">
                  <h3 className="font-medium mb-2">Key Concepts</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>Fluid flow can be laminar (smooth, orderly) or turbulent (chaotic, mixing)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>The Reynolds number helps predict flow regime based on velocity, geometry, and fluid properties</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>Bernoulli's principle relates fluid pressure to flow velocity and elevation</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Flow Types Tab */}
          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Flow Types and Classifications</h2>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    Fluid flow can be classified in several ways, each highlighting different aspects of the flow behavior.
                  </p>

                  <h3 className="text-xl font-semibold mt-6">Steady vs. Unsteady Flow</h3>

                  <ul>
                    <li><strong>Steady flow</strong> - Flow properties at any point do not change with time</li>
                    <li><strong>Unsteady flow</strong> - Flow properties vary with time (also called transient flow)</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6">Laminar vs. Turbulent Flow</h3>

                  <ul>
                    <li>
                      <strong>Laminar flow</strong> - Fluid particles move in smooth, parallel layers with minimal mixing
                      <ul>
                        <li>Occurs at low Reynolds numbers (typically Re &lt; 2300 for pipe flow)</li>
                        <li>Orderly, predictable motion</li>
                        <li>Viscous forces dominate inertial forces</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Turbulent flow</strong> - Fluid motion is chaotic with significant mixing between layers
                      <ul>
                        <li>Occurs at high Reynolds numbers (typically Re &gt; 4000 for pipe flow)</li>
                        <li>Irregular, random fluctuations</li>
                        <li>Inertial forces dominate viscous forces</li>
                        <li>Enhanced mixing and heat transfer</li>
                      </ul>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6">Compressible vs. Incompressible Flow</h3>

                  <ul>
                    <li><strong>Incompressible flow</strong> - Fluid density remains constant (most liquid flows and low-speed gas flows)</li>
                    <li><strong>Compressible flow</strong> - Fluid density changes significantly (high-speed gas flows, especially above Mach 0.3)</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6">Other Classifications</h3>

                  <ul>
                    <li><strong>Viscous vs. inviscid flow</strong> - Whether viscous effects are significant or negligible</li>
                    <li><strong>Internal vs. external flow</strong> - Flow inside a conduit vs. flow around an object</li>
                    <li><strong>Uniform vs. non-uniform flow</strong> - Whether flow properties vary with position</li>
                    <li><strong>One-, two-, or three-dimensional flow</strong> - Number of spatial dimensions needed to describe the flow</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placeholder for other tabs */}
          <TabsContent value="conservation">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Conservation Laws</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for conservation laws will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bernoulli">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Bernoulli's Equation</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for Bernoulli's equation will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pipe-flow">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Pipe Flow Analysis</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for pipe flow analysis will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dimensional">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Dimensional Analysis</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for dimensional analysis will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-10">
          <Link href="/basics/fluid-statics">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous Module
            </Button>
          </Link>

          <Link href="/basics/applications">
            <Button>
              Next Module <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
