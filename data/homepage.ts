import { client } from '@/app/sanity/client';

export const homepage = {
	async getHeroSection(): Promise<any> {
		try {
			const heroSection = await client.fetch(`*[_type == "homepage"][0]{
			HeroTitle,
			HeroCaption,
		}`);
			return heroSection;
		} catch (error) {
			console.error(error);
			throw new Error('Failed to fetch hero section');
		}
	},
};
