const handleSwitch = (nav, burger, counter) => {
    let children = [...burger.children];

  /1/.test(counter)
    ? nav.classList.remove("hide-nav")
    : nav.classList.add("hide-nav");

  if (/1/.test(counter)) {
    children.forEach((span) => {
      span.classList.add('col-white')
      span.classList.remove("col-black");
    });
  }
  else{
    children.forEach((span) => {
        span.classList.add("col-black");
        span.classList.remove('col-white')
      });
  }
};

export default handleSwitch;
