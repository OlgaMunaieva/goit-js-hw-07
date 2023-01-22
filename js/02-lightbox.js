import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeupGalleryPictures = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

galleryEl.innerHTML = makeupGalleryPictures;

const activePicture = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
activePicture.on("show.simplelightbox");
