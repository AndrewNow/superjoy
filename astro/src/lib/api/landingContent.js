import { useSanityClient, groq } from 'astro-sanity';

export async function getLandingContent() {
  const query = groq`*[_type == "landing"][0]{
    "imageUrl": mainImage.asset->url,
    description,
    "partnerImages": partners[].asset->url,
  }`;
  const landingContent = await useSanityClient().fetch(query);
  return landingContent;
}