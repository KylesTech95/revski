const button = document.querySelector(".collapse-container");
const nav_container = document.getElementById("nav-container");
import handleSwitch from "./handleSwitch";
import handleIcon from "./handleIcon"

let counter = 0;
// click button/hamburger
button.onclick = (e) => {
  counter = (counter + 1) % 2;
  handleSwitch(nav_container,e.currentTarget,counter)
  handleIcon(e.currentTarget,counter)
};

export default counter;
