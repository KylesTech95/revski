const button = document.querySelector(".collapse-container");
const nav_container = document.getElementById("nav-container");
import handleSwitch from "./handleSwitch";
import handleIcon from "./handleIcon"

// create counter
let counter = 0;
// click button/hamburger
button.onclick = (e) => {
  // on each click, the counter switches between 1 & 0
  counter = (counter + 1) % 2;
  // handle navigation pane
  handleSwitch(nav_container,e.currentTarget,counter)
  // handle spans in hamburger
  handleIcon(e.currentTarget,counter)
};

export default counter;
