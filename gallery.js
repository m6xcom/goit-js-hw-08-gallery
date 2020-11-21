import galleryImages from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");

const renderedGalleryItems = galleryImages.map((elem) => {
  const imgItem = document.createElement("li");
  const imgLink = document.createElement("a");
  imgLink.classList.add("gallery-link");
  imgLink.setAttribute("href", elem.original);
  imgItem.append(imgLink);
  const imgTag = document.createElement("img");
  imgTag.classList.add("gallery__image");
  imgTag.setAttribute("src", elem.preview);
  imgTag.dataset.source = elem.original;
  imgTag.setAttribute("alt", elem.description);
  imgLink.append(imgTag);
  return imgItem;
});

galleryList.append(...renderedGalleryItems);

const closeBtn = document.querySelector("[data-action='close-lightbox']");
const modalBox = document.querySelector(".js-lightbox");
const imgInModal = document.querySelector(".lightbox__image");

const openModal = function (event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    modalBox.classList.add("is-open");
    imgInModal.src = event.target.dataset.source;
  }
};
const closeModal = function () {
  modalBox.classList.remove("is-open");
  imgInModal.src = "#";
};

galleryList.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
