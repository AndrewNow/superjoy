import { useSanityClient, groq } from 'astro-sanity';

export async function getLandingContent() {
  const query = groq`*[_type == "landing"][0]{
    "imageUrl": mainImage.asset->url,
    mainImage,
    "lqip": mainImage.asset->metadata.lqip,
    description,
    "partnerImages": partners[].asset->url,
    "partnerImagesLQIP": partners[].asset->metadata.lqip,
  }`;
  const landingContent = await useSanityClient().fetch(query);
  return landingContent;
}