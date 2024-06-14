import ifURLMatchesHref from "./hrefValidation";
const links = document.querySelectorAll(".art");
const desktop_links = [...links].slice(0, 4);
const mobile_links = [...links].slice(-4);
const array = [desktop_links, mobile_links];
const title = document.querySelector('title')
const nav = document.querySelector('.nav-fixed-class')

// For each (desktop & mobile) arrays of links
array.forEach((row, index) => {
    // capture current href/url
 let currentHref = ifURLMatchesHref(row, window)[0]
 // store custom class into variable
 const bottomBorder = 'border-bottom'
 // add class to current href/url
 currentHref.classList.add(bottomBorder)
});