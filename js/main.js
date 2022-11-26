// Navbar control when scrolling

// window.addEventListener('scroll', () => {
//     var header = document.querySelector('.header-area');
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

// create intersection observer


// 

document.querySelector('#livechat_btn').addEventListener('click', () => {

  document.querySelector('.chatWrapper').style.display = "block";
  document.querySelector('#toggleLive_chat_label').style.display = "block";

});



document.querySelector('.fa-headset').addEventListener('click', () => {

  document.querySelector('.chatWrapper').style.display = "block";
  document.querySelector('#toggleLive_chat_label').style.display = "block";

});


document.querySelector('#toggleLive_chat_label').addEventListener('click', () => {

  document.querySelector('.chatWrapper').style.display = "none";
  document.querySelector('#toggleLive_chat_label').style.display = "none";

});

const cards = document.querySelectorAll(".our-services-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

// page loaded
cards.forEach((card) => {
  observer.observe(card);
});

window.addEventListener("scroll", (event) => {
  if (window.scrollY == 0) {
    cards.forEach((card) => {
      observer.observe(card);
    });
  }
});

// our stats observer

const stats_cards = document.querySelectorAll(
  ".StatisticsInfo .content .stats-card"
);

const stats_cards_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

// page loaded
stats_cards.forEach((card) => {
  stats_cards_observer.observe(card);
});

window.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY == 0) {
    stats_cards.forEach((card) => {
      stats_cards_observer.observe(card);
    });
  }
});
// countdown function 
const countDate = new Date("nov 26 2022 16:00:00").getTime();

var x = setInterval(function () {
  let current_time = new Date().getTime();

  let difference = countDate - current_time;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var min = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));

  document.getElementById('days').innerHTML = days;

  document.getElementById("counterdown-hours").innerHTML = hours;

  document.getElementById("counterdown-minutes").innerHTML = min;


})

// Swal close button 

var swal_close_button = document.getElementById("swal-close-button");

swal_close_button.addEventListener("click", function () {
  swal.close();
});


var swal_canel_button = document.getElementById("swal-cancel-button");

swal_canel_button.addEventListener("click", function () {
  swal.close();
});
