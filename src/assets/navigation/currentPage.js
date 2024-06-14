import ifURLMatchesHref from "./hrefValidation";
const links = document.querySelectorAll(".art");
const desktop_links = [...links].slice(0, 4);
const mobile_links = [...links].slice(-4);
const array = [desktop_links, mobile_links];
const title = document.querySelector('title')
const nav = document.querySelector('.nav-fixed-class')

array.forEach((row, index) => {
 let currentHref = ifURLMatchesHref(row, window)[0]
 const bottomBorder = 'border-bottom'
 currentHref.classList.add(bottomBorder)
});
window.addEventListener('click',e=>{
    const navEdgePosition = nav.getBoundingClientRect().x+nav.clientWidth
    if(window.innerWidth <= 750){
        console.log(nav)
        if(e.pageX > navEdgePosition){
            
        }
    }
})