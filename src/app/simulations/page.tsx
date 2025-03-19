import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function SimulationsPage() {
  const simulations = [
    {
      id: "laminar-flow",
      title: "Laminar Flow Simulation",
      description: "Visualize the smooth, layered flow of a fluid with low Reynolds number",
      difficulty: "Beginner",
      image: "bg-gradient-to-r from-blue-500 to-cyan-500",
      concepts: ["Reynolds Number", "Viscous Forces", "Flow Visualization"]
    },
    {
      id: "turbulent-flow",
      title: "Turbulent Flow Simulation",
      description: "Explore chaotic fluid motion with irregular fluctuations and mixing",
      difficulty: "Intermediate",
      image: "bg-gradient-to-r from-purple-500 to-pink-500",
      concepts: ["Turbulence", "Vortices", "Flow Instability"]
    },
    {
      id: "bernoulli-effect",
      title: "Bernoulli's Principle",
      description: "Understand the relationship between fluid velocity and pressure",
      difficulty: "Beginner",
      image: "bg-gradient-to-r from-green-500 to-emerald-500",
      concepts: ["Pressure-Velocity Relationship", "Conservation of Energy", "Flow Rate"]
    },
    {
      id: "hydrostatic-pressure",
      title: "Hydrostatic Pressure Simulation",
      description: "Examine how pressure varies with depth in a static fluid",
      difficulty: "Beginner",
      image: "bg-gradient-to-r from-sky-500 to-indigo-500",
      concepts: ["Pascal's Law", "Pressure Gradient", "Manometers"]
    },
    {
      id: "buoyancy",
      title: "Buoyancy and Floating Objects",
      description: "Visualize the forces that cause objects to float or sink in fluids",
      difficulty: "Intermediate",
      image: "bg-gradient-to-r from-orange-500 to-amber-500",
      concepts: ["Archimedes' Principle", "Buoyant Force", "Stability"]
    },
    {
      id: "pipe-flow",
      title: "Pipe Flow Analysis",
      description: "Study the behavior of fluid flowing through pipes of different shapes",
      difficulty: "Advanced",
      image: "bg-gradient-to-r from-red-500 to-rose-500",
      concepts: ["Pressure Drop", "Friction Factor", "Head Loss"]
    }
  ];

  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Interactive Fluid Simulations</h1>
          <p className="text-xl text-muted-foreground">
            Experiment with interactive simulations to visualize and understand fluid mechanics principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simulations.map((sim) => (
            <Card key={sim.id} className="overflow-hidden flex flex-col">
              <div className={`h-40 ${sim.image}`} />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{sim.title}</CardTitle>
                  <div className="px-2 py-1 text-xs rounded-full bg-muted">
                    {sim.difficulty}
                  </div>
                </div>
                <CardDescription>{sim.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Key Concepts:</h4>
                  <div className="flex flex-wrap gap-1">
                    {sim.concepts.map((concept, i) => (
                      <div key={i} className="rounded-full px-2 py-1 text-xs bg-secondary text-secondary-foreground">
                        {concept}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Link href={`/simulations/${sim.id}`} className="w-full">
                  <Button className="w-full">
                    Launch Simulation <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Using the Simulations</CardTitle>
            <CardDescription>
              Get the most out of your learning experience with these interactive tools
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <div className="text-primary">1</div>
                  </div>
                  <h3 className="font-medium">Explore Parameters</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Adjust the simulation parameters to observe how they affect fluid behavior. This hands-on experimentation reinforces theoretical concepts.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <div className="text-primary">2</div>
                  </div>
                  <h3 className="font-medium">Observe Patterns</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pay attention to flow patterns, pressure distributions, and other visual cues that illustrate key fluid mechanics principles.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <div className="text-primary">3</div>
                  </div>
                  <h3 className="font-medium">Apply Knowledge</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Connect what you observe in the simulations with the theoretical concepts from the lesson modules to deepen your understanding.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
