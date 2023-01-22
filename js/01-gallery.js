import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeupGalleryPictures = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  )
  .join("");

galleryEl.innerHTML = makeupGalleryPictures;

galleryEl.addEventListener("click", showLargePicture);

function showLargePicture(event) {
  event.preventDefault();

  const ImgSource = getImgSource(event);

  const activePicture = createActivePicture(ImgSource);

  activePicture.show();

  closePictureButtonEsc(activePicture);
}

function getImgSource(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  return event.target.dataset.source;
}

function createActivePicture(img) {
  return basicLightbox.create(
    `
    <img src="${img}" width="800" height="600">
`
  );
}

function closePictureButtonEsc(activePicture) {
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.code !== "Escape") {
        return;
      } else if (!basicLightbox.visible()) {
        return;
      } else {
        activePicture.close();
      }
    },
    { once: true }
  );
}
