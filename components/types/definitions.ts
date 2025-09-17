export interface Homepage {
	id: number;
	documentId: string;
	HeroTitle: string;
	HeroCaption: string;
	TrainWithVasanasaBodyText: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;

	HomepageSeo: {
		id: number;
		metaTitle: string;
		metaDescription: string;
	};

	FounderQuote: {
		id: number;
		title: string;
		body: string;
	};

	BusinessStatsDiv: {
		id: number;
		StatsNumbers: string;
		StatsTitle: string;
		StatsCaption: string;
	}[];

	BusinessStatsImage: ImageAsset;
	BusinessStatsImg: ImageAsset;

	Instructors: {
		id: number;
		InstructorsRole: string;
		InstructorName: string;
		InstructorBio: string | null;
	}[];

	Workshops: {
		id: number;
		SectionHeading: string;
		SectionBody: string;
	};

	UpcomingEvents: {
		id: number;
		SectionHeading: string;
		SectionBody: string | null;
	};

	Testimonials: {
		id: number;
		TestimonialBody: string;
		PersonnelName: string;
		PersonnelRole: string;
	}[];

	seoImage: ImageAsset;
	MonicaImageSmall: ImageAsset;
	PeterImageSmall: ImageAsset;
	WorkshopImage: ImageAsset;
	EventsImage: ImageAsset;
	TestimonialsImage: ImageAsset;
	BijouImage: ImageAsset;
	ProsperImage: ImageAsset;
	LawrenciaImage: ImageAsset;
}

export interface ImageFormats {
	thumbnail?: ImageFormat;
	small?: ImageFormat;
	medium?: ImageFormat;
	large?: ImageFormat;
}

export interface ImageFormat {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: string | null;
	width: number;
	height: number;
	size: number;
	sizeInBytes?: number;
	url: string;
}

export interface ImageAsset {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: ImageFormats | null;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: any | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}
