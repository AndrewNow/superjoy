import { useSanityClient, groq } from 'astro-sanity';

export async function getAllProjects() {
  const query = groq`*[_type == "organizedProjects"][0] {
    allProjects[]-> {
      projectName,
      mainImage,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      video,
      description,
      gameMode, 
      client,
      date,
      code,
      "additionalImages": imageArray[].asset->url,
      "slug": slug.current,
    }
  }`;
  const organizedProjects = await useSanityClient().fetch(query);
  return organizedProjects;
}


export async function getProjectPage() {
  const query = groq`*[_type == "organizedProjects"][0] {
    allProjects[]-> {
      projectName,
      "imageUrl": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      video,
      description,
      gameMode, 
      client,
      date,
      code,
      "additionalImages": imageArray[].asset->url,
      "additionalImagesLQIP": imageArray[].asset->metadata.lqip,
      "slug": slug.current,
    }
  }`;
  const organizedProjects = await useSanityClient().fetch(query);
  return organizedProjects;
}


export async function getProjectSlugsOnly() {
  const query = groq`*[_type == "organizedProjects"][0] {
    allProjects[]-> {
      "slug": slug.current,
    }
  }`;
  const organizedProjects = await useSanityClient().fetch(query);
  return organizedProjects;
}