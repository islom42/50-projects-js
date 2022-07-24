const containerImages = document.querySelectorAll(".container__image");

containerImages.forEach(containerImage => {
  containerImage.addEventListener("click",  () => {
    removeClass()
    containerImage.classList.add("active")
  } )
})

function removeClass() {
  containerImages.forEach(containerImage => {
    containerImage.classList.remove("active")
  })
}