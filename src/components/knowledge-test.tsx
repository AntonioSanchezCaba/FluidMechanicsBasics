"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, ChevronRight, ChevronLeft, RefreshCw } from "lucide-react"
import { Progress } from "./ui/progress"

type Question = {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

// Sample questions for demo
const questions: Question[] = [
  {
    id: 1,
    text: "What is the SI unit of viscosity?",
    options: [
      "Pascal (Pa)",
      "Pascal-second (Pa·s)",
      "Newton (N)",
      "Kilogram per cubic meter (kg/m³)"
    ],
    correctAnswer: 1,
    explanation: "The SI unit of viscosity is the Pascal-second (Pa·s), also known as the Newton-second per square meter (N·s/m²)."
  },
  {
    id: 2,
    text: "Which of the following statements about Bernoulli's principle is correct?",
    options: [
      "As the velocity of a fluid increases, the pressure increases",
      "As the velocity of a fluid increases, the pressure decreases",
      "Pressure and velocity have no relationship in flowing fluids",
      "Bernoulli's principle only applies to gases, not liquids"
    ],
    correctAnswer: 1,
    explanation: "Bernoulli's principle states that as the velocity of a fluid increases, the pressure decreases. This explains the lift force on airplane wings and the curve of spinning balls."
  },
  {
    id: 3,
    text: "What is the primary factor that determines if a flow is laminar or turbulent?",
    options: [
      "The Reynolds number",
      "The fluid density",
      "The temperature of the fluid",
      "The volume of the fluid"
    ],
    correctAnswer: 0,
    explanation: "The Reynolds number is the primary factor determining whether flow is laminar or turbulent. It's a dimensionless quantity that represents the ratio of inertial forces to viscous forces."
  },
  {
    id: 4,
    text: "What happens to a submerged object when its density is less than the fluid it's in?",
    options: [
      "It sinks to the bottom",
      "It remains in place",
      "It floats to the surface",
      "It dissolves into the fluid"
    ],
    correctAnswer: 2,
    explanation: "When an object has a density lower than the fluid it's submerged in, the buoyant force exceeds the gravitational force, causing the object to float to the surface."
  },
  {
    id: 5,
    text: "Which equation represents the conservation of mass for an incompressible fluid?",
    options: [
      "∇·v = 0",
      "∇×v = 0",
      "∇²p = 0",
      "dp/dt = 0"
    ],
    correctAnswer: 0,
    explanation: "For an incompressible fluid, the conservation of mass is represented by the continuity equation ∇·v = 0, where v is the velocity field. This equation states that the divergence of the velocity field is zero."
  }
]

export function KnowledgeTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, number>>({})
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer
  const progress = (Object.keys(answeredQuestions).length / questions.length) * 100

  const handleSelectAnswer = (optionIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(optionIndex)
      setAnsweredQuestions(prev => ({
        ...prev,
        [currentQuestion.id]: optionIndex
      }))
      setShowExplanation(true)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)

      // Set the selected answer from previous answers if it exists
      const prevAnswer = answeredQuestions[questions[currentQuestionIndex - 1].id]
      setSelectedAnswer(prevAnswer !== undefined ? prevAnswer : null)
      setShowExplanation(prevAnswer !== undefined)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setAnsweredQuestions({})
    setShowExplanation(false)
  }

  const correctAnswersCount = Object.entries(answeredQuestions).reduce((count, [questionId, answerIndex]) => {
    const question = questions.find(q => q.id === parseInt(questionId))
    return question && question.correctAnswer === answerIndex ? count + 1 : count
  }, 0)

  const allQuestionsAnswered = Object.keys(answeredQuestions).length === questions.length

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Test Your Knowledge</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Challenge yourself with these fluid mechanics questions
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-4 space-y-1">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{Object.keys(answeredQuestions).length} of {questions.length} questions answered</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
              <CardDescription className="text-lg font-medium mt-2">
                {currentQuestion.text}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-lg cursor-pointer border transition-colors ${
                      selectedAnswer === index
                        ? isCorrect
                          ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                          : "border-red-500 bg-red-50 dark:bg-red-950/20"
                        : "border-muted-foreground/20 hover:border-muted-foreground/50"
                    }`}
                    onClick={() => handleSelectAnswer(index)}
                  >
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${
                      selectedAnswer === null
                        ? "border border-muted-foreground/30"
                        : selectedAnswer === index
                          ? isCorrect
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : index === currentQuestion.correctAnswer && showExplanation
                            ? "bg-green-500 text-white"
                            : "border border-muted-foreground/30"
                    }`}>
                      {selectedAnswer !== null && (
                        selectedAnswer === index ? (
                          isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />
                        ) : (
                          index === currentQuestion.correctAnswer && showExplanation && <CheckCircle className="w-4 h-4" />
                        )
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-4 rounded-lg bg-muted"
                  >
                    <h4 className="font-medium mb-1">Explanation:</h4>
                    <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>

              <Button
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1 || selectedAnswer === null}
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {allQuestionsAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Complete!</CardTitle>
                  <CardDescription>
                    You scored {correctAnswersCount} out of {questions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-3">
                    <div className="text-4xl font-bold">
                      {Math.round((correctAnswersCount / questions.length) * 100)}%
                    </div>
                    <Progress value={(correctAnswersCount / questions.length) * 100} className="h-2" />
                    <p className="text-muted-foreground pt-2">
                      {correctAnswersCount === questions.length
                        ? "Excellent! You've mastered these concepts."
                        : correctAnswersCount >= questions.length / 2
                          ? "Good job! You understand the basics, but there's still room to improve."
                          : "Keep studying! Review the explanations to better understand the concepts."
                      }
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={handleRestart}>
                    <RefreshCw className="mr-2 h-4 w-4" /> Restart Quiz
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
