import { useSanityClient, groq } from 'astro-sanity';

export async function getFAQContent() {
  const query = groq`*[_type == "faq"][0]{
    faqData,
  }`;
  const faqContent = await useSanityClient().fetch(query);
  return faqContent;
}