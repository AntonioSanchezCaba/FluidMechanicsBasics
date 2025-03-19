import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function QuickCheckPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center space-x-4">
          <Link href="/tests">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Tests
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Quick Knowledge Check</h1>
          <p className="text-muted-foreground">
            Test your understanding of basic fluid mechanics concepts with this 5-question quiz.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quiz Overview</CardTitle>
            <CardDescription>
              This short quiz covers fundamental concepts from all modules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Quiz Details:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>5 multiple-choice questions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>Estimated time: 5 minutes</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>Immediate feedback</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>Detailed explanations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Topics covered:</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>Fluid properties</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>Fluid statics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>Basic fluid dynamics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                  <span>Key equations and principles</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t flex justify-center">
              <Button className="w-full md:w-auto md:min-w-[200px]">
                Start Quiz
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Tip: Review the basic concepts in each module before taking the quiz for best results.
            Remember that you can retake the quiz as many times as you want to improve your score.
          </p>
        </div>
      </div>
    </div>
  )
}
