import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function TestsPage() {
  const quizzes = [
    {
      id: "fluid-properties",
      title: "Fluid Properties Quiz",
      description: "Test your knowledge of fluid properties and characteristics",
      questions: 10,
      time: "10 minutes",
      difficulty: "Beginner",
      topics: ["Density", "Viscosity", "Surface Tension", "Compressibility"]
    },
    {
      id: "fluid-statics",
      title: "Fluid Statics Assessment",
      description: "Evaluate your understanding of hydrostatics and pressure concepts",
      questions: 12,
      time: "15 minutes",
      difficulty: "Intermediate",
      topics: ["Hydrostatic Pressure", "Buoyancy", "Pascal's Law", "Manometers"]
    },
    {
      id: "fluid-dynamics",
      title: "Fluid Dynamics Test",
      description: "Challenge yourself with questions about fluid in motion",
      questions: 15,
      time: "20 minutes",
      difficulty: "Advanced",
      topics: ["Bernoulli's Equation", "Reynolds Number", "Conservation Laws", "Flow Types"]
    },
    {
      id: "quick-check",
      title: "Quick Knowledge Check",
      description: "A short quiz to test your basic fluid mechanics understanding",
      questions: 5,
      time: "5 minutes",
      difficulty: "Beginner",
      topics: ["Basic Concepts", "Fundamental Principles", "Key Definitions"]
    }
  ];

  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Knowledge Tests</h1>
          <p className="text-xl text-muted-foreground">
            Test your understanding of fluid mechanics concepts with these interactive quizzes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{quiz.title}</CardTitle>
                  <div className={`px-2 py-1 text-xs rounded-full ${
                    quiz.difficulty === "Beginner"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : quiz.difficulty === "Intermediate"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}>
                    {quiz.difficulty}
                  </div>
                </div>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span>{quiz.questions} Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{quiz.time}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {quiz.topics.map((topic, i) => (
                      <div key={i} className="rounded-full px-2 py-1 text-xs bg-secondary text-secondary-foreground">
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 mt-auto">
                <Link href={`/tests/${quiz.id}`} className="w-full">
                  <Button className="w-full">
                    Start Quiz <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mt-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Your Progress
            </CardTitle>
            <CardDescription>
              Track your learning journey and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Mastery</span>
                  <span className="text-sm">25%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "25%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground">Complete more quizzes to increase your mastery level</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border bg-card p-3">
                  <div className="text-xs text-muted-foreground mb-1">Quizzes Attempted</div>
                  <div className="text-2xl font-bold">1 / 4</div>
                </div>
                <div className="rounded-lg border bg-card p-3">
                  <div className="text-xs text-muted-foreground mb-1">Average Score</div>
                  <div className="text-2xl font-bold">72%</div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-4">
                <h4 className="font-medium text-sm mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="bg-background p-2 rounded-md flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">Quick Knowledge Check</div>
                      <div className="text-xs text-muted-foreground">Completed 2 days ago</div>
                    </div>
                    <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full px-2 py-1 text-xs font-medium">
                      4/5 Correct
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
