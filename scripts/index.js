// Select elements

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector("..profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Open modal when edit button is clicked
editProfileBtn.addEventListener("click", function() {
  editProfileModal.classList.add("modal_is-opened");
});

// Close modal when close button is clicked
editProfileCloseBtn.addEventListener("click", function() {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function() {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function() {
  newPostModal.classList.remove("modal_is-opened");
});