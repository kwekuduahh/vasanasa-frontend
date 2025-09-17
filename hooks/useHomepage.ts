import { Homepage } from '@/components/types/definitions';

// This is now a server-side data fetching function, not a React hook
export default function useHomepage(data: Homepage) {
	const homepageData = data;

	function getHeroSection() {
		return {
			title: homepageData.HeroTitle,
			caption: homepageData.HeroCaption,
		};
	}

	function getTestimonials() {
		return homepageData.Testimonials;
	}

	function getFounderQuoteSection() {
		return homepageData.FounderQuote;
	}

	function getBusinessStats() {
		return homepageData.BusinessStatsDiv;
	}

	function getInstructors() {
		return homepageData.Instructors;
	}

	function getWorkshopSection() {
		return homepageData.Workshops;
	}

	function getUpcomingEventsSection() {
		return homepageData.UpcomingEvents;
	}

	return {
		getHeroSection,
		getTestimonials,
		getFounderQuoteSection,
		getBusinessStats,
		getInstructors,
		getWorkshopSection,
		getUpcomingEventsSection,
	};
}
