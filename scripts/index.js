const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
    name: "Restaurant terraceAn outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  }
];


// ---------------------------
// DOM SELECTIONS
// ---------------------------

// Buttons
const editProfileBtn = document.querySelector(".profile__edit-btn");
const newPostBtn = document.querySelector(".profile__add-btn");

// Modals
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

// Close buttons (scoped to each modal)
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Profile display elements (page text)
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Edit Profile form + inputs
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput =editProfileModal.querySelector("#profile-description-input");

// New Post form + inputs
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#card-image-input");

// IMPORTANT: HTML currently reuses id="profile-description-input" in the New Post modal.
// IDs must be unique.
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

// ---------------------------
// REUSABLE MODAL FUNCTIONS (DRY)
// ---------------------------

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// ---------------------------
// EVENT LISTENERS
// ---------------------------

// Open "Edit Profile" modal
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

// Edit Profile submit handler
editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
});

//New Post submit handler
newPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Image:", newPostImageInput.value);
  console.log("Description:", newPostCaptionInput.value);
  closeModal(newPostModal);
  newPostForm.reset();
});


// Close "Edit Profile" modal
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// Open "New Post" modal
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

// Close "New Post" modal
newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

initialCards.forEach(function (card) {
  console.log(card.name);
  console.log(card.link);
});