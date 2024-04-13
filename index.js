// Nav(Header) Navigation
let aTags = document.querySelectorAll('header a');
for (var i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      behavior: 'smooth',
      top: target.offsetTop,
    });
  };
}

// Go btn Navigation
document.querySelector('.btn').addEventListener('click', function () {
  let target = document.querySelector('#me');

  window.scrollTo({
    behavior: 'smooth',
    top: target.offsetTop,
  });
});


// section2 => me
const info = {
  "Location": "Ulsan, Korea",
  "Date of Birth": "2001.11.29",
  "Current Occupation": "Job Hunting",
  "Desired Occupation": "Web developer"
};

const ex1 = document.querySelector(".ex1");
const ex2 = document.querySelector(".ex2");
const ex3 = document.querySelector(".ex3");
const ex4 = document.querySelector(".ex4");

const items = [ex1, ex2, ex3, ex4];

items.forEach((item, idx) => {
  item.addEventListener("mouseover", function () {
    changeWord(item, Object.keys(info)[idx]);
  });
  item.addEventListener("mouseleave", function () {
    restoreWord(item, Object.keys(info)[idx]);
  });
});

function changeWord(element, key) {
  element.innerText = info[key];
}

function restoreWord(element, key) {
  element.innerText = key
}

// skill section animation
// 원래 section("#skill")에 도착하면 애니메이션이 사작되게 하고 싶었으나, 하지 못함

