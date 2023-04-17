import { useSanityClient, createImageBuilder } from "astro-sanity";

const builder = createImageBuilder(useSanityClient());

export function getSanityImageURL(source) {
  return builder.image(source);
}

// Linear interpolation function
export const lerp = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
export const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.clientX || e.clientY) {
    posx = e.clientX;
    posy = e.clientY;
  }
  return { x: posx, y: posy };
};

// Get sibilings
export const getSiblings = (e) => {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};