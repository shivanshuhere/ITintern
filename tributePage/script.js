let sec1 = document.querySelector(".home");
let sec2 = document.querySelector("#earlyLife");
let sec3 = document.querySelector("#career");
let sec4 = document.querySelector("#influences");
let sec5 = document.querySelector("#death");
let sec6 = document.querySelector("#legacy");
let sec7 = document.querySelector("#work");

function animateOnScroll(ele) {
  let classArr = [...ele.target.classList];
  if (!classArr.includes("appear")) {
    ele.target.classList.add("appear");
  }
}

const observer = new IntersectionObserver((enetries) => {
  enetries.forEach((enetry) => {
    if (enetry.isIntersecting) {
      animateOnScroll(enetry);
    }
  });
});

observer.observe(sec7);
observer.observe(sec6);
observer.observe(sec5);
observer.observe(sec4);
observer.observe(sec3);
observer.observe(sec2);
observer.observe(sec1);
