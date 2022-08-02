const bgImage = document.querySelector(".container__bg");
const containerText = document.querySelector(".container__text");

let percent = 0;
let int = setInterval(getBlurring, 30)

function getBlurring() {
  percent++
  if (percent > 99) clearInterval(int)
  containerText.innerHTML = `${percent}%`
  containerText.style.opacity = scale(percent,0,100, 1, 0)
  bgImage.style.filter = `blur(${scale(percent, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
