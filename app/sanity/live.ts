import { defineLive } from 'next-sanity/live';
import { client } from '@/app/sanity/client';

export const { sanityFetch, SanityLive } = defineLive({ client });
