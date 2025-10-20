import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import Statistics from "@/components/Statistics"
import Instructors from "@/components/Instructors"
import TrainWithVasanasa from "@/components/TrainWithVasanasa"
import Events from "@/components/Events"
import Workshops from "@/components/Workshops"
import Testimonials from "@/components/Testimonials"


export default function Home() {

  return (
    <>
      <Hero />
      <AboutSection />
      <Statistics />
      <TrainWithVasanasa />
      <Instructors />
      <Workshops />
      <Events />
      <Testimonials />
    </>
  );
}
