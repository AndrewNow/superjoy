import { useSanityClient, createImageBuilder } from "astro-sanity";

const builder = createImageBuilder(useSanityClient());

export function getSanityImageURL(source) {
  return builder.image(source);
}