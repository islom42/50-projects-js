const btn = document.querySelector(".btn");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-container__input");

btn.addEventListener("click", () => {
  searchContainer.classList.toggle("active")
  searchInput.focus()
})