const btnsJustify = document.querySelectorAll(".j-opt-btn");
const btnsAlign = document.querySelectorAll(".a-opt-btn");
const ratingSubContainer = document.querySelector(".rating-sub");

btnsJustify.forEach((x) => {
  x.onclick = (e) => {
    let currJ = [...ratingSubContainer.classList].filter((x) =>
      /j-/.test(x)
    )[0];
    let ind = [...ratingSubContainer.classList].indexOf(currJ);
    let btn_class = `j-${e.target.textContent}`;
    ratingSubContainer.classList.remove([...ratingSubContainer.classList][ind])
    ratingSubContainer.classList.add(btn_class);
    console.log(ratingSubContainer.classList)
  };
});
btnsAlign.forEach((x) => {
  x.onclick = (e) => {
    let currA = [...ratingSubContainer.classList].filter((x) =>
      /a-/.test(x)
    )[0];
    let ind = [...ratingSubContainer.classList].indexOf(currA);
    console.log(ind)
    let btn_class = `a-${e.target.textContent}`;
    ratingSubContainer.classList.remove([...ratingSubContainer.classList][ind])
    ratingSubContainer.classList.add(btn_class);
    console.log(ratingSubContainer.classList)

  };
});
