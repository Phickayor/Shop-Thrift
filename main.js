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
var newArrivalsDiv = gid("allNewArrivals");
var mostWantedDiv = gid("allMostWanted");
var sliderDiv = gid("slider");
next.addEventListener("click", function () {
  nextSlider();
});
prev.addEventListener("click", function () {
  prevSlider();
});
var seeMoreArrivalsOrLessBtn = gid("seeMoreArrivals");
var seeMoreMostWantedBtn = gid("seeMoreMostWanted");
// SEE MORE FUNCTION FOR NEW ARRIVALS
seeMoreArrivalsOrLessBtn.addEventListener("click", function () {
  if (seeMoreArrivalsOrLessBtn.innerHTML == "See Less") {
    seeMoreArrivalsOrLessBtn.innerHTML = "See More";
  } else {
    seeMoreArrivalsOrLessBtn.innerHTML = "See Less";
  }
  newArrivalsDiv.classList.toggle("seeMore");
});
// SEE MORE BUTTON FOR MOST WANTED
seeMoreMostWantedBtn.addEventListener("click", function () {
  if (seeMoreMostWantedBtn.innerHTML == "See Less") {
    seeMoreMostWantedBtn.innerHTML = "See More";
  } else {
    seeMoreMostWantedBtn.innerHTML = "See Less";
  }
  mostWantedDiv.classList.toggle("seeMore");
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
    <a href=""><button class="slider-btn">Check It Out</button></a>
  </div>
  <a id="next">&#8811;</a>
</div>`;
  return (sliderDiv.innerHTML = items);
}
setInterval(slider, 2000);

// New Arrivals
const newArrivalsDetails = [
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  }
];
function newArrivals() {
  newArrivalsDetails.map((item) => {
    const newArrivalsFormat = `
  <div class="arrivalItem">
    <img src="${item.image}" />
    <h1>Nike Cargos</h1>
    <p>&dollar;${item.amount}</p>
    <button class="cart-btn">Add To Cart</button>
  </div>`;
    return (newArrivalsDiv.innerHTML += newArrivalsFormat);
  });
}

//MOST WANTED
const mostWantedDetails = [
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq",
    amount: "20000"
  }
];
function mostWanted() {
  mostWantedDetails.map((item) => {
    const mostWantedFormat = `
  <div class="arrivalItem">
    <img src="${item.image}" />
    <h1>Nike Cargos</h1>
    <p>&dollar;${item.amount}</p>
    <button class="cart-btn">Add To Cart</button>
  </div>`;
    return (mostWantedDiv.innerHTML += mostWantedFormat);
  });
}
window.onload = function () {
  newArrivals();
  mostWanted();
};
