import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = sanityClient({
    projectId: 'zr4axyxp',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.PROJECT_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);