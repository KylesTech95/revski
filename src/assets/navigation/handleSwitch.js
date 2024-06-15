const handleSwitch = (nav, burger, counter) => {
  // capture spans in hamburger icon
  let children = [...burger.children];

  // if counter tests positive for 1, then show nav
  /1/.test(counter)
    ? nav.classList.remove("hide-nav")
    : nav.classList.add("hide-nav");
  // if counter tests positive for 1, then change the colors of each span in hamburger icon
  if (/1/.test(counter)) {
    children.forEach((span) => {
      span.classList.add("col-white");
      span.classList.remove("col-black");
    });
  } else {
    children.forEach((span) => {
      span.classList.add("col-black");
      span.classList.remove("col-white");
    });
  }
};

export default handleSwitch;
