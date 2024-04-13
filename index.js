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
