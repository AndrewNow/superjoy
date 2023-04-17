import { useSanityClient, groq } from 'astro-sanity';

export async function getFeaturedProject() {
  const query = groq`*[_type == "projects" && featured == true]{
    featured,
    projectName,
    "imageUrl": mainImage.asset->url,
    video,
    description,
    gameMode, 
    client,
    date,
    code,
    "partnerImages": imageArray[].asset->url,
  }`;
  const projects = await useSanityClient().fetch(query);
  return projects;
}
export async function getNonFeaturedProjects() {
  const query = groq`*[_type == "projects" && !featured == true]{
    featured,
    projectName,
    "imageUrl": mainImage.asset->url,
    video,
    description,
    gameMode, 
    client,
    date,
    code,
    "partnerImages": imageArray[].asset->url,
  }`;
  const projects = await useSanityClient().fetch(query);
  return projects;
}
export async function getAllProjects() {
  const query = groq`*[_type == "projects"]{
    featured,
    projectName,
    "imageUrl": mainImage.asset->url,
    video,
    description,
    gameMode, 
    client,
    date,
    code,
    "partnerImages": imageArray[].asset->url,
  }`;
  const projects = await useSanityClient().fetch(query);
  return projects;
}