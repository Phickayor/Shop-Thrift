function gid(selectedValue) {
  return document.getElementById(selectedValue);
}
const sliderDetails = [
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "sit dolor nasj"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "amet smani chaow"
  }
];
var prev = gid("prev");
var next = gid("next");
var sliderDiv = gid("slider");
next.addEventListener("click", function () {
  nextSlider();
});
prev.addEventListener("click", function () {
  prevSlider();
});
var i = 0;
function slider() {
  if (i >= 2) {
    i = -1;
  }
  i += 1;
  const items = `<div class="slider-item">
  <a id="prev">&#8810;</a>
  <img
    src="${sliderDetails[i].image}"
  />
  <div class="description">
    <h2>${sliderDetails[i].text}</h2>
    <button>Check It Out</button>
  </div>
  <a id="next">&#8811;</a>
</div>`;
  return (sliderDiv.innerHTML = items);
}
setInterval(slider, 2000);
