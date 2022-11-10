//GET ELEMENT BY ID SIMPLIFIED FUNCTION
function gid(selectedValue) {
  return document.getElementById(selectedValue);
}

//SLIDER CODE
//SLIDER DETAILS IN OBJECT
const sliderDetails = [
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "Lorem ipsum Amlq"
  },
  {
    image:
      "https://drive.google.com/file/d/1K7qGvqNazZVJ7qWDCOjPK62SozY3R7Ya/view?usp=share_link",
    text: "sit dolor nasj"
  },
  {
    image:
      "https://images.pexels.com/photos/2884834/pexels-photo-2884834.jpeg?auto=compress&cs=tinysrgb&w=2000",
    text: "amet smani chaow"
  }
];

//DECLARATION OF NECESSARY VARIABLES
var sliderDiv = gid("slider");
var i = 0;

//SLIDER FUNCTION
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
//RUNING SLIDER AFTER 5 SECONDS
setInterval(slider, 5000);

/*
var prev = gid("prev");
var next = gid("next");

next.addEventListener("click", function () {
  nextSlider();
});

prev.addEventListener("click", function () {
  prevSlider();
});
*/

//SIDEMENU CODE
//DECLARATION OF NECESSARY VARIABLES
var open = gid("open");
var close = gid("close");
var sideMenu = gid("sideMenu");

//FUNCTION TO SHOW SIDEMENU
open.addEventListener("click", function () {
  sideMenu.style.display = "block";
  open.style.display = "none";
  close.style.display = "block";
});

//FUNCTION TO CLOSE SIDEMENU
close.addEventListener("click", function () {
  sideMenu.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
});

//NEW ARRIVAL SECTION CODE
var seeMoreArrivalsOrLessBtn = gid("seeMoreArrivals");
var seeMoreMostWantedBtn = gid("seeMoreMostWanted");
var seeMoreJustForYouBtn = gid("seeMoreJustForYou");
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

// SEE MORE BUTTON FOR JUST FOR YOU
seeMoreJustForYouBtn.addEventListener("click", function () {
  if (seeMoreJustForYouBtn.innerHTML == "See Less") {
    seeMoreJustForYouBtn.innerHTML = "See More";
  } else {
    seeMoreJustForYouBtn.innerHTML = "See Less";
  }
  justForYouDiv.classList.toggle("seeMore");
});

// NEW ARRIVALS
//DECLARATION OF NECESSARY VARIABLES
var newArrivalsDiv = gid("allNewArrivals");

//NEW ARRIVALS DETAILS IN OBJECT
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

//NEW ARRIVALS FUNCTION
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
//DECLARATION OF NECESSARY VARIABLES
var mostWantedDiv = gid("allMostWanted");

//MOST WANTED DETAILS IN OBJECT
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

//MOST WANTED FUNCTION
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

//JUST FOR YOU
//DECLARATION OF NECESSARY VARIABLES
var justForYouDiv = gid("allJustForYou");

//JUST FOR YOU DETAILS IN OBJECT
const justForYouDetails = [
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

//JUST FOR YOU FUNCTION
function justForYou() {
  justForYouDetails.map((item) => {
    const justForYouFormat = `
  <div class="arrivalItem">
    <img src="${item.image}" />
    <h1>Nike Cargos</h1>
    <p>&dollar;${item.amount}</p>
    <button class="cart-btn">Add To Cart</button>
  </div>`;
    return (justForYouDiv.innerHTML += justForYouFormat);
  });
}

window.onload = function () {
  newArrivals();
  mostWanted();
  justForYou();
};
