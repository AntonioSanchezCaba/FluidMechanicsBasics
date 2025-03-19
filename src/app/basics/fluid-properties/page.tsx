import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function FluidPropertiesPage() {
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
          <div className="text-sm text-muted-foreground">Module 1 of 4</div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Fluid Properties & Fundamentals</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the core characteristics of fluids and their behavior
          </p>
        </div>

        <Tabs defaultValue="introduction" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="density">Density</TabsTrigger>
            <TabsTrigger value="viscosity">Viscosity</TabsTrigger>
            <TabsTrigger value="surface-tension">Surface Tension</TabsTrigger>
            <TabsTrigger value="compressibility">Compressibility</TabsTrigger>
            <TabsTrigger value="vapor-pressure">Vapor Pressure</TabsTrigger>
          </TabsList>

          {/* Introduction Tab */}
          <TabsContent value="introduction" className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight">What is a Fluid?</h2>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    A <strong>fluid</strong> is a substance that continually deforms (flows) under an applied shear stress, or external force.
                    Unlike solids, fluids cannot resist deformation and will flow to take the shape of their container.
                  </p>

                  <p>
                    There are two main types of fluids:
                  </p>

                  <ul>
                    <li>
                      <strong>Liquids</strong> - Incompressible fluids that have a definite volume but take the shape of their container.
                      They have strong intermolecular forces that keep molecules close together.
                    </li>
                    <li>
                      <strong>Gases</strong> - Compressible fluids that expand to fill their container.
                      They have weak intermolecular forces, allowing molecules to move freely.
                    </li>
                  </ul>

                  <p>
                    Fluid mechanics is the branch of physics that deals with the study of fluids (liquids and gases) and the forces acting on them.
                    It includes hydrostatics (the study of fluids at rest) and fluid dynamics (the study of fluids in motion).
                  </p>

                  <h3 className="text-xl font-semibold mt-6">Fundamental Properties of Fluids</h3>

                  <p>
                    To understand and predict fluid behavior, we need to characterize fluids through their properties.
                    The most important fluid properties include:
                  </p>

                  <ul>
                    <li><strong>Density</strong> - Mass per unit volume</li>
                    <li><strong>Specific Weight</strong> - Weight per unit volume</li>
                    <li><strong>Viscosity</strong> - Resistance to flow or deformation</li>
                    <li><strong>Surface Tension</strong> - Force acting along the surface of a liquid</li>
                    <li><strong>Compressibility</strong> - Change in volume with pressure</li>
                    <li><strong>Vapor Pressure</strong> - Pressure at which a liquid begins to vaporize</li>
                  </ul>

                  <p>
                    These properties determine how fluids behave in different conditions and are essential for engineering
                    applications, from designing water distribution systems to aerodynamic vehicles.
                  </p>
                </div>

                <div className="bg-muted rounded-md p-4 mt-6">
                  <h3 className="font-medium mb-2">Key Takeaways</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>A fluid is a substance that continuously deforms under applied shear stress</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>Fluids include both liquids (incompressible, definite volume) and gases (compressible, no definite volume)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>Understanding key fluid properties is fundamental for predicting fluid behavior</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="col-span-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">Common Fluids in Engineering</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-medium mr-3 flex-shrink-0">W</div>
                      <div>
                        <div className="font-medium">Water</div>
                        <div className="text-sm text-muted-foreground">
                          Density: 1000 kg/m³ (at 4°C), Viscosity: 0.001 Pa·s
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-700 dark:text-red-300 font-medium mr-3 flex-shrink-0">A</div>
                      <div>
                        <div className="font-medium">Air</div>
                        <div className="text-sm text-muted-foreground">
                          Density: 1.225 kg/m³ (at sea level), Viscosity: 0.000018 Pa·s
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-700 dark:text-amber-300 font-medium mr-3 flex-shrink-0">O</div>
                      <div>
                        <div className="font-medium">Oil</div>
                        <div className="text-sm text-muted-foreground">
                          Density: 800-900 kg/m³, Viscosity: 0.03-0.4 Pa·s
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">Quick Interactive Check</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select the correct answer for each question to check your understanding.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm mb-2">Which of these is NOT a fluid?</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-transparent"></div>
                          </div>
                          <span className="text-sm">Water</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-transparent"></div>
                          </div>
                          <span className="text-sm">Air</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-sm">Steel</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-transparent"></div>
                          </div>
                          <span className="text-sm">Oil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Density Tab */}
          <TabsContent value="density" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Density and Specific Weight</h2>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    <strong>Density</strong> (ρ) is defined as mass per unit volume and is a fundamental property of all materials, including fluids.
                  </p>

                  <div className="bg-muted p-4 rounded-md my-4 text-center">
                    <p className="text-xl font-mono">ρ = m/V</p>
                    <p className="text-sm mt-2">
                      Where: ρ = density (kg/m³), m = mass (kg), V = volume (m³)
                    </p>
                  </div>

                  <p>
                    For water at 4°C, the density is 1000 kg/m³, which serves as a convenient reference point.
                  </p>

                  <p>
                    <strong>Specific weight</strong> (γ) is the weight per unit volume, which is related to density by:
                  </p>

                  <div className="bg-muted p-4 rounded-md my-4 text-center">
                    <p className="text-xl font-mono">γ = ρg</p>
                    <p className="text-sm mt-2">
                      Where: γ = specific weight (N/m³), ρ = density (kg/m³), g = gravitational acceleration (9.81 m/s²)
                    </p>
                  </div>

                  <p>
                    For water at 4°C, the specific weight is approximately 9810 N/m³.
                  </p>

                  <h3 className="text-xl font-semibold mt-6">Related Properties</h3>

                  <p>
                    <strong>Specific gravity</strong> (SG) is the ratio of the density of a substance to the density of a reference substance,
                    typically water at 4°C:
                  </p>

                  <div className="bg-muted p-4 rounded-md my-4 text-center">
                    <p className="text-xl font-mono">SG = ρ/ρ_water</p>
                  </div>

                  <p>
                    Since specific gravity is a ratio, it is dimensionless and has no units.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placeholder for other tabs */}
          <TabsContent value="viscosity">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Viscosity</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for viscosity tab will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="surface-tension">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Surface Tension</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for surface tension tab will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compressibility">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Compressibility</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for compressibility tab will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vapor-pressure">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold tracking-tight">Vapor Pressure</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>Content for vapor pressure tab will be added here...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-10">
          <Button variant="outline" disabled>
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Module
          </Button>

          <Link href="/basics/fluid-statics">
            <Button>
              Next Module <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
