// Select elements

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileForm = editProfileModal.querySelector{".modal__form"};
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");

const editProfileDescriptionInput = editProfileModal.querySelector("#profile-Description-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector{".profile__name"};
const profileDescriptionEl = document.querySelector{".profile__description"};

// Open modal when edit button is clicked
editProfileBtn.addEventListener("click", function() {
  editProfileNameInput.value = profileNameEl.textContent;
  // TODO Fill description input
editProfileDescriptionInput.value = profileDescriptionEl.textContent;

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

function handleEditProfileSubmit (evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  newPostModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit" , handleEditProfileSubmit);