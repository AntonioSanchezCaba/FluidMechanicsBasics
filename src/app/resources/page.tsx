import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, BookOpen, FileText, Video, Download, Bookmark } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const books = [
    {
      title: "Fluid Mechanics: Fundamentals and Applications",
      author: "Yunus A. Cengel, John M. Cimbala",
      description: "Comprehensive coverage of fluid mechanics with numerous examples and applications",
      link: "#",
      level: "Intermediate"
    },
    {
      title: "Introduction to Fluid Mechanics",
      author: "Robert W. Fox, Alan T. McDonald, Philip J. Pritchard",
      description: "Classic text on fluid mechanics fundamentals with clear explanations",
      link: "#",
      level: "Beginner"
    },
    {
      title: "Fundamentals of Fluid Mechanics",
      author: "Bruce R. Munson, Donald F. Young, Theodore H. Okiishi",
      description: "Well-structured introduction with many worked examples and problem sets",
      link: "#",
      level: "Beginner to Intermediate"
    },
    {
      title: "Physical Fluid Dynamics",
      author: "D. J. Tritton",
      description: "Focus on the physical aspects of fluid dynamics with applications",
      link: "#",
      level: "Advanced"
    }
  ];

  const onlineResources = [
    {
      title: "MIT OpenCourseWare: Fluid Dynamics",
      description: "Free lecture videos and notes from MIT's fluid dynamics course",
      link: "https://ocw.mit.edu/courses/mechanical-engineering/2-06-fluid-dynamics-spring-2013/",
      type: "Course"
    },
    {
      title: "National Committee for Fluid Mechanics Films",
      description: "Classic fluid mechanics demonstration videos originally developed at MIT",
      link: "http://web.mit.edu/hml/ncfmf.html",
      type: "Videos"
    },
    {
      title: "NASA Fluid Mechanics Tutorials",
      description: "Educational resources on fluid mechanics from NASA",
      link: "https://www.grc.nasa.gov/www/k-12/airplane/",
      type: "Tutorial"
    },
    {
      title: "CFD Online",
      description: "Community and resources for computational fluid dynamics",
      link: "https://www.cfd-online.com/",
      type: "Forum"
    }
  ];

  const calculators = [
    {
      title: "Reynolds Number Calculator",
      description: "Calculate Reynolds number for different fluids and geometries",
      link: "#"
    },
    {
      title: "Pipe Flow Calculator",
      description: "Determine pressure drop, flow rate, and velocity in pipe systems",
      link: "#"
    },
    {
      title: "Bernoulli Equation Solver",
      description: "Calculate pressure, velocity, and height relationships in fluid flow",
      link: "#"
    },
    {
      title: "Drag Force Calculator",
      description: "Compute drag forces on objects moving through fluids",
      link: "#"
    }
  ];

  const downloadables = [
    {
      title: "Fluid Properties Reference Chart",
      description: "Comprehensive table of fluid properties including density, viscosity, and more",
      fileType: "PDF",
      size: "1.2 MB",
      link: "#"
    },
    {
      title: "Fluid Mechanics Formula Sheet",
      description: "Quick reference guide to common equations and formulas",
      fileType: "PDF",
      size: "0.8 MB",
      link: "#"
    },
    {
      title: "Pump Performance Data Collection Sheet",
      description: "Template for recording pump test data in laboratory settings",
      fileType: "Excel",
      size: "0.5 MB",
      link: "#"
    },
    {
      title: "Dimensional Analysis Worksheet",
      description: "Practice worksheet for dimensional analysis in fluid mechanics",
      fileType: "PDF",
      size: "0.3 MB",
      link: "#"
    }
  ];

  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Learning Resources</h1>
          <p className="text-xl text-muted-foreground">
            Additional materials to help you deepen your understanding of fluid mechanics
          </p>
        </div>

        <Tabs defaultValue="textbooks" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
            <TabsTrigger value="online">Online Resources</TabsTrigger>
            <TabsTrigger value="calculators">Calculators</TabsTrigger>
            <TabsTrigger value="downloads">Downloadable Materials</TabsTrigger>
          </TabsList>

          <TabsContent value="textbooks" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.map((book, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{book.title}</CardTitle>
                      <div className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                        {book.level}
                      </div>
                    </div>
                    <CardDescription className="flex items-center mt-1">
                      <BookOpen className="h-3 w-3 mr-1 inline" />
                      {book.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{book.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={book.link} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Find Book
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online" className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {onlineResources.map((resource, i) => (
                <Card key={i}>
                  <div className="md:flex">
                    <div className="md:w-[120px] flex items-center justify-center bg-muted p-6">
                      {resource.type === "Course" ? (
                        <BookOpen className="h-10 w-10 text-primary" />
                      ) : resource.type === "Videos" ? (
                        <Video className="h-10 w-10 text-primary" />
                      ) : resource.type === "Tutorial" ? (
                        <FileText className="h-10 w-10 text-primary" />
                      ) : (
                        <Bookmark className="h-10 w-10 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>{resource.type}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild>
                          <Link href={resource.link} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Resource
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calculators" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calculators.map((calc, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                  <CardHeader>
                    <CardTitle>{calc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{calc.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={calc.link}>
                        Open Calculator
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloadables.map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="h-5 w-5 mr-2 text-primary" />
                      {item.title}
                    </CardTitle>
                    <CardDescription>
                      {item.fileType} • {item.size}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={item.link}>
                        Download
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>Looking for More?</CardTitle>
            <CardDescription>
              Reach out to our team with specific resource requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
              <p className="text-muted-foreground text-sm md:max-w-[60%]">
                Can't find what you're looking for? We're continuously adding new resources based on user feedback and requests.
              </p>
              <Button className="w-full md:w-auto">
                Request Resources
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
