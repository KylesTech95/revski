import blink from "../reviews/blink";
const btnsJustify = document.querySelectorAll(".j-opt-btn");
const btnsAlign = document.querySelectorAll(".a-opt-btn");
const btnsSize = document.querySelectorAll(".sz-opt-btn");
const ratingSubContainer = document.querySelector(".rating-sub");
const ratingItems = document.querySelectorAll(".rating-item");

// justify rating icons
btnsJustify.forEach((x) => {
  x.onclick = (e) => {
    let currJ = [...ratingSubContainer.classList].filter((x) =>
      /j-/.test(x)
    )[0];
    let ind = [...ratingSubContainer.classList].indexOf(currJ);
    let btn_class = `j-${e.target.textContent}`;
    ratingSubContainer.classList.remove([...ratingSubContainer.classList][ind]);
    ratingSubContainer.classList.add(btn_class);
    blink(e.target);
  };
});
// align rating icons
btnsAlign.forEach((x) => {
  x.onclick = (e) => {
    let currA = [...ratingSubContainer.classList].filter((x) =>
      /a-/.test(x)
    )[0];
    let ind = [...ratingSubContainer.classList].indexOf(currA);
    let btn_class = `a-${e.target.textContent}`;
    ratingSubContainer.classList.remove([...ratingSubContainer.classList][ind]);
    ratingSubContainer.classList.add(btn_class);
    blink(e.target);
  };
});
// icon size
btnsSize.forEach((x) => {
  x.onclick = (e) => {
    ratingItems.forEach((a, i) => {
      let currSize = [...a.classList].filter((classy) => /sz-/.test(classy))[0];
      let ind = [...a.classList].indexOf(currSize);
      let btn_class = `sz-${e.target.textContent}`;
      a.classList.remove([...a.classList][ind]);
      a.classList.add(btn_class);
    });
    blink(e.target);
  };
});

