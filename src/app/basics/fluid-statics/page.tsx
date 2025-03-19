import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function FluidStaticsPage() {
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
          <div className="text-sm text-muted-foreground">Module 2 of 4</div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Fluid Statics</h1>
          <p className="text-xl text-muted-foreground">
            Learn how fluids behave at rest and the principles of hydrostatics
          </p>
        </div>

        <Tabs defaultValue="introduction" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="pressure">Pressure</TabsTrigger>
            <TabsTrigger value="forces">Hydrostatic Forces</TabsTrigger>
            <TabsTrigger value="buoyancy">Buoyancy</TabsTrigger>
            <TabsTrigger value="manometers">Manometers</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          {/* Introduction Tab */}
          <TabsContent value="introduction" className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">Fluid Statics Overview</h2>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    <strong>Fluid statics</strong> (also called hydrostatics) is the study of fluids at rest.
                    In this state, all parts of the fluid are in equilibrium, with no relative motion between them.
                  </p>

                  <p>
                    While the principles of fluid statics apply to both liquids and gases, they're most commonly applied to liquids
                    because the effects of gravity on gases are often negligible compared to other forces.
                  </p>

                  <p>
                    The key principles and concepts in fluid statics include:
                  </p>

                  <ul>
                    <li><strong>Pressure</strong> - Force per unit area exerted by a fluid on its surroundings</li>
                    <li><strong>Hydrostatic pressure</strong> - Pressure that increases with depth due to the weight of the fluid above</li>
                    <li><strong>Pascal's principle</strong> - Pressure exerted at any point in a confined fluid is transmitted equally in all directions</li>
                    <li><strong>Hydrostatic forces</strong> - Forces exerted by static fluids on submerged surfaces</li>
                    <li><strong>Buoyancy</strong> - The upward force exerted by a fluid on a submerged object</li>
                    <li><strong>Archimedes' principle</strong> - The buoyant force equals the weight of the displaced fluid</li>
                  </ul>

                  <p>
                    Understanding fluid statics is foundational for many practical applications, including:
                  </p>

                  <ul>
                    <li>Design of dams and hydraulic structures</li>
                    <li>Ship and submarine design</li>
                    <li>Fluid pressure measurement instruments</li>
                    <li>Hydraulic systems and machinery</li>
                    <li>Weather forecasting (atmospheric pressure)</li>
                    <li>Understanding blood pressure in the cardiovascular system</li>
                  </ul>
                </div>

                <div className="bg-muted rounded-md p-4 mt-6">
                  <h3 className="font-medium mb-2">Key Concepts</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>Pressure at a point in a static fluid depends only on depth and fluid density</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>Pressure acts equally in all directions (Pascal's principle)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>Buoyant force equals the weight of fluid displaced (Archimedes' principle)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pressure Tab */}
          <TabsContent value="pressure" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Pressure in Fluids</h2>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    <strong>Pressure</strong> is defined as the force per unit area applied perpendicular to a surface.
                  </p>

                  <div className="bg-muted p-4 rounded-md my-4 text-center">
                    <p className="text-xl font-mono">P = F/A</p>
                    <p className="text-sm mt-2">
                      Where: P = pressure (Pa), F = force (N), A = area (m²)
                    </p>
                  </div>

                  <p>
                    In a static fluid, pressure increases with depth due to the weight of the fluid above. This relationship is given by:
                  </p>

                  <div className="bg-muted p-4 rounded-md my-4 text-center">
                    <p className="text-xl font-mono">P = P₀ + ρgh</p>
                    <p className="text-sm mt-2">
                      Where: P = pressure at depth h, P₀ = pressure at surface, ρ = fluid density, g = gravitational acceleration, h = depth
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mt-6">Important Pressure Concepts</h3>

                  <ul>
                    <li><strong>Absolute pressure</strong> - Total pressure, including atmospheric pressure</li>
                    <li><strong>Gauge pressure</strong> - Pressure relative to atmospheric pressure (what most instruments measure)</li>
                    <li><strong>Pressure head</strong> - Pressure expressed as fluid column height (h = P/ρg)</li>
                    <li><strong>Pascal's law</strong> - Pressure applied to an enclosed fluid transmits equally in all directions</li>
                  </ul>

                  <p>
                    Pressure is the same at all points at the same depth in a static, homogeneous fluid.
                    This principle allows us to design hydraulic systems and understand phenomena like
                    why a small force on a small piston can create a large force on a large piston.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placeholder for other tabs */}
          <TabsContent value="forces">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Hydrostatic Forces</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for hydrostatic forces will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="buoyancy">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Buoyancy</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for buoyancy will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manometers">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Manometers</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for manometers will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Applications</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for applications will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-10">
          <Link href="/basics/fluid-properties">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous Module
            </Button>
          </Link>

          <Link href="/basics/fluid-dynamics">
            <Button>
              Next Module <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
