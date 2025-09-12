'use client';
import Hero from "@/components/Hero"
import AboutSection from "@/components/AboutSection"
import Statistics from "@/components/Statistics"
import Instructors from "@/components/Instructors"
import TrainWithVasanasa from "@/components/TrainWithVasanasa"
import Events from "@/components/Events"
import Workshops from "@/components/Workshops"
import Testimonials from "@/components/Testimonials"
import useHomepage from "@/hooks/useHomepage"
import { useQuery } from "@tanstack/react-query"
import { getHomepageData } from "@/data/getHomepageData"
import Loading from "./loading";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['homepage'],
    queryFn: getHomepageData,
  });

  if (isLoading) return <Loading />;
  if (!data) return <div>No data available</div>;

  const { getHeroSection, getTestimonials, getFounderQuoteSection } = useHomepage(data.data);

  const heroSection = getHeroSection();
  const testimonials = getTestimonials();
  const founderQuoteSection = getFounderQuoteSection();

  return (
    <>
      <Hero title={heroSection.title} caption={heroSection.caption} />
      <AboutSection body={founderQuoteSection.body} />
      <Statistics />
      <TrainWithVasanasa />
      <Instructors />
      <Workshops />
      <Events />
      <Testimonials Testimonials={testimonials} />
    </>
  );
}
