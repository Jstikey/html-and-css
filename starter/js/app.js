const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`please check your class name, no ${selector} with this name`);
};

let date = getElement("#date");
let time = new Date().getFullYear();
date.innerText = time;

const NavBtn = document.getElementById("changeMe");
const NavBtn2 = document.getElementById("changeMe1");

//function to create button text
NavBtn.onclick = () => {
  document.getElementById("hide").classList.toggle("nav-show");
};
// NavBtn2.onclick = () => {
//   NavBtn2.style.display = "none";
//   document.getElementById("hide").classList.toggle("nav-show");
//   NavBtn.style.display = "block";
// };

//aternate code

// document.getElementById("showNav").onclick = () => {
//   document.getElementById("showNav").style.display = "none";
//   document.getElementById("hideNav").style.display = "block";
//   document.getElementById("hide").style.display = "block";
// };

// document.getElementById("hideNav").onclick = () => {
//   document.getElementById("hide").style.display = "none";
//   document.getElementById("showNav").style.display = "block";
//   document.getElementById("hideNav").style.display = "none";
// };
