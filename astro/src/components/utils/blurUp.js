const images = document.querySelectorAll("img[data-src]");

const loadImage = (image) => {
  const src = image.getAttribute("data-src");
  if (!src) {
    return;
  }

  image.setAttribute("src", src);

  image.onload = () => {
    image.removeAttribute("data-src");
    image.style.filter = "unset";
  };
};

const options = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

images.forEach((image) => {
  observer.observe(image);
});