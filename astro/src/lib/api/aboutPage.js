import { useSanityClient, groq } from 'astro-sanity';

export async function getAboutPageContent() {
  const query = groq`*[_type == "about"][0]{
    ourMission,
    whoWeAre,
    team {
      "aliImageUrl": aliPortrait.asset->url,
      "danielaImageUrl": danielaPortrait.asset->url,
      founderBio,
      teamMembers[] {
        ...,
        "portraitUrl": memberPortrait.asset->url,
      }
    }
  }`;
  const aboutPageContent = await useSanityClient().fetch(query);
  return aboutPageContent;
}