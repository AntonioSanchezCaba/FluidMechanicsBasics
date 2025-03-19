"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { BookOpen, Atom, Gauge, TestTube, GanttChart, BarChart } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <BookOpen className="h-12 w-12 text-blue-500" />,
    title: "Comprehensive Lessons",
    description: "Learn the fundamentals of fluid mechanics through structured and detailed lessons that build your knowledge step by step."
  },
  {
    icon: <Atom className="h-12 w-12 text-teal-500" />,
    title: "Interactive Simulations",
    description: "Visualize fluid behaviors through dynamic simulations that let you adjust parameters and see real-time changes."
  },
  {
    icon: <Gauge className="h-12 w-12 text-indigo-500" />,
    title: "Real-world Applications",
    description: "Connect theory to practice with applied examples from engineering, environmental science, and everyday phenomena."
  },
  {
    icon: <TestTube className="h-12 w-12 text-purple-500" />,
    title: "Hands-on Experiments",
    description: "Follow virtual lab experiments that demonstrate key fluid mechanics principles without physical equipment."
  },
  {
    icon: <GanttChart className="h-12 w-12 text-blue-600" />,
    title: "Progress Tracking",
    description: "Monitor your learning journey with built-in progress tracking that helps you identify strengths and areas for improvement."
  },
  {
    icon: <BarChart className="h-12 w-12 text-teal-600" />,
    title: "Knowledge Tests",
    description: "Test your understanding with quizzes and assessments designed to reinforce your learning and identify gaps."
  }
]

export function FeaturesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How You'll Learn</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our platform combines theory, visualization, and practice to help you master fluid mechanics.
            </p>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
