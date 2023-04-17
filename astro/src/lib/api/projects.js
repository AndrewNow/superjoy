import { useSanityClient, groq } from 'astro-sanity';

export async function getAllProjects() {
  const query = groq`*[_type == "organizedProjects"][0] {
    allProjects[]-> {
      projectName,
      "imageUrl": mainImage.asset->url,
      video,
      description,
      gameMode, 
      client,
      date,
      code,
      "additionalImages": imageArray[].asset->url,
    }
  }`;
  const organizedProjects = await useSanityClient().fetch(query);
  return organizedProjects;
}