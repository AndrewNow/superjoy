import { useSanityClient, groq } from 'astro-sanity';

export async function getRoadmapContent() {
  const query = groq`*[_type == "roadmap"][0]{
    roadmapData,
  }`;
  const roadmapContent = await useSanityClient().fetch(query);
  return roadmapContent;
}