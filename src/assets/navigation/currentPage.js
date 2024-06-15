import ifURLMatchesHref from "./hrefValidation";
const links = document.querySelectorAll(".art");
const desktop_links = [...links].slice(0, 4);
const mobile_links = [...links].slice(-4);
const array = [desktop_links, mobile_links];

const nav = document.getElementById("nav-container-id");

// move the target article element
const moveTarget = (row, target, event, c) => {
  const regx = new RegExp("ArrowUp|ArrowDown|ArrowRight|ArrowLeft");
  if (regx.test(event.key)) {
    let idx = row.indexOf(target);
    // // console.log(row[idx])
    if (/ArrowUp|ArrowLeft/.test(event.key) && idx > 0)
      target = row[(idx -= 1)];
    if (/ArrowDown|ArrowRight/.test(event.key) && idx < 3)
      target = row[(idx += 1)];

    return target;
  }
};

// declare a counter
// For each (desktop & mobile) arrays of links
let target;
array.forEach((row, index) => {
  // capture current href/url
  let currentHref = ifURLMatchesHref(row, window)[0];
  // store custom class into variable
  const bottomBorder = "border-bottom";
  // add class to current href/url
  currentHref.classList.add(bottomBorder);
  const handleKeydownFn = (e) => {
    if (row.includes(currentHref)) target = currentHref;
    // remove bottom border from target (article element)
    target.classList.remove("border-bottom");
    // track the current target
    target = moveTarget(row, target, e);
    // currentHref now equals the new Href
    currentHref = target;
    target.classList.add("border-bottom");
    // let endpoint = '/'+target.textContent;
    // newUrl = window.location.origin+endpoint
    // console.log(target.href);
    setTimeout(() => {
      window.location.href = target.href;
    }, 0);
  };
  if (window.innerWidth > 1000) {
    nav.addEventListener("click", () => {
      window.addEventListener("keydown", handleKeydownFn);
      window.addEventListener("click", (e) => {
        if (e.pageY > nav.clientHeight) {
          window.removeEventListener("keydown", handleKeydownFn);
        }
      });
    });
  }
});
