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
  openModal(editProfileModal);
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