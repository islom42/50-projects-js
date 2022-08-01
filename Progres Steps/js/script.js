const progressLine = document.getElementById("progress-wrapper__line");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".progress-wrapper__circle");

let currentActive = 1;
nextBtn.addEventListener("click", () => {
  currentActive++
  if(currentActive > circles.length) 
    currentActive = circles.length
  update()
})
prevBtn.addEventListener("click", () => {
  currentActive--
  if(currentActive < 1) 
    currentActive = 1
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if(idx < currentActive) circle.classList.add("active")
    else circle.classList.remove("active")
  })
  let activeCircles = document.querySelectorAll(".active")
  progressLine.style.width = `${((activeCircles.length - 1) / (circles.length - 1) * 100)}%`

  if(currentActive === 1) prevBtn.disabled = true;
  else if(currentActive === 4) nextBtn.disabled = true;
  else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}