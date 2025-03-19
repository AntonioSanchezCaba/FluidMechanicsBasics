import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CourseOverview } from "@/components/course-overview"
import { SimulationDemo } from "@/components/simulation-demo"
import { KnowledgeTest } from "@/components/knowledge-test"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CourseOverview />
      <SimulationDemo />
      <KnowledgeTest />
    </>
  )
}
