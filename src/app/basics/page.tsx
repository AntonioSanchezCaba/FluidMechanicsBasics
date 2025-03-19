import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function BasicsPage() {
  const modules = [
    {
      id: "fluid-properties",
      title: "Fluid Properties & Fundamentals",
      description: "Understand what fluids are and their key physical properties",
      topics: [
        "Introduction to Fluids",
        "Density and Specific Weight",
        "Viscosity and Shear Stress",
        "Surface Tension",
        "Compressibility",
        "Vapor Pressure"
      ],
      bgClass: "bg-blue-100 dark:bg-blue-900"
    },
    {
      id: "fluid-statics",
      title: "Fluid Statics",
      description: "Learn how fluids behave at rest and the principles of hydrostatics",
      topics: [
        "Pressure and its Measurement",
        "Hydrostatic Forces on Submerged Surfaces",
        "Buoyancy and Stability",
        "Manometers and Pressure Gauges",
        "Hydrostatic Paradox",
        "Pressure Variation with Depth"
      ],
      bgClass: "bg-green-100 dark:bg-green-900"
    },
    {
      id: "fluid-dynamics",
      title: "Fluid Dynamics",
      description: "Explore fluid in motion, including flow types and behavior",
      topics: [
        "Flow Visualization and Classification",
        "Conservation Laws (Mass, Momentum, Energy)",
        "Bernoulli's Equation",
        "Laminar vs. Turbulent Flow",
        "Pipe Flow Analysis",
        "Dimensional Analysis and Similarity"
      ],
      bgClass: "bg-purple-100 dark:bg-purple-900"
    },
    {
      id: "applications",
      title: "Applications & Advanced Topics",
      description: "Apply fluid mechanics principles to real-world problems",
      topics: [
        "Aerodynamics and Lift Generation",
        "Hydraulic Systems and Machinery",
        "Open Channel Flow",
        "Waves and Wave Dynamics",
        "Computational Fluid Dynamics Intro",
        "Flow Measurement Techniques"
      ],
      bgClass: "bg-amber-100 dark:bg-amber-900"
    }
  ];

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Fluid Mechanics Basics</h1>
          <p className="text-xl text-muted-foreground">
            Master the fundamental concepts and principles of fluid mechanics
          </p>
        </div>

        <Separator />

        <div className="grid gap-8">
          {modules.map((module, index) => (
            <Card key={module.id} className="overflow-hidden">
              <div className="md:grid md:grid-cols-3 md:gap-4">
                <div className={`md:col-span-1 relative min-h-[200px] ${module.bgClass}`}>
                </div>
                <div className="md:col-span-2 p-6">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Module {index + 1}</div>
                        <CardTitle className="text-2xl">{module.title}</CardTitle>
                      </div>
                      <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="mt-4">
                      <h4 className="font-medium text-sm mb-2">Topics covered:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-4 text-sm">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Link href={`/basics/${module.id}`}>
                          <Button>
                            Start Learning <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Learning Path</CardTitle>
            <CardDescription>
              Follow this guided learning path to master fluid mechanics step-by-step
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted" />
              <div className="space-y-8 relative">
                <div className="relative pl-8">
                  <div className="absolute left-0 rounded-full w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground">1</div>
                  <h3 className="font-semibold">Start with Fluid Properties</h3>
                  <p className="text-sm text-muted-foreground">
                    Begin by understanding what fluids are and their fundamental properties. This forms the foundation for everything else.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 rounded-full w-8 h-8 bg-primary/80 flex items-center justify-center text-primary-foreground">2</div>
                  <h3 className="font-semibold">Move to Fluid Statics</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how fluids behave at rest, including pressure, buoyancy, and hydrostatic forces.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 rounded-full w-8 h-8 bg-primary/60 flex items-center justify-center text-primary-foreground">3</div>
                  <h3 className="font-semibold">Explore Fluid Dynamics</h3>
                  <p className="text-sm text-muted-foreground">
                    Dive into the behavior of fluids in motion, including flow patterns, conservation laws, and Bernoulli's principle.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 rounded-full w-8 h-8 bg-primary/40 flex items-center justify-center text-primary-foreground">4</div>
                  <h3 className="font-semibold">Apply Your Knowledge</h3>
                  <p className="text-sm text-muted-foreground">
                    Use what you've learned to understand real-world applications and advanced topics in fluid mechanics.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
