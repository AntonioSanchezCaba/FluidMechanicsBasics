"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const courseModules = [
  {
    id: "module-1",
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
    image: "https://images.examples.com/wp-content/uploads/2024/04/Laws-of-Fluid-Dynamics-1.png"
  },
  {
    id: "module-2",
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
    image: "https://i.ytimg.com/vi/oL_DOxFagvI/maxresdefault.jpg"
  },
  {
    id: "module-3",
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
    image: "http://www.karlsims.com/flow-example.jpg"
  },
  {
    id: "module-4",
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
    image: "https://www.simscale.com/wp-content/uploads/2019/04/cfd_featured.png"
  }
]

export function CourseOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Course Curriculum</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A structured learning path from basic fluid properties to advanced applications
            </p>
          </div>
        </div>

        <Tabs defaultValue="module-1" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {courseModules.map(module => (
              <TabsTrigger key={module.id} value={module.id} className="text-center py-2">
                {module.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {courseModules.map(module => (
            <TabsContent key={module.id} value={module.id}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-auto rounded-lg object-cover aspect-video"
                      />
                    </div>
                    <div className="md:w-2/3 space-y-2">
                      <CardTitle className="text-2xl">{module.title}</CardTitle>
                      <CardDescription className="text-base">{module.description}</CardDescription>
                      <Link href={`/basics/${module.id}`}>
                        <Button className="mt-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                          Start Module <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-3">Topics Covered:</h3>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {module.topics.map((topic, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        variants={itemVariants}
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">{topic}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
