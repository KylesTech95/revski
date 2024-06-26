const wb = document.getElementById("workbench-container")
const footer = document.querySelector('footer')
const moveWorkBenchToBottom = (footer,wb) => {
    if(window.innerWidth <= 750){
        let footY = (footer.getBoundingClientRect().y - 110) + "px"
        wb.style.top = footY
    }
}
const moveWorkBenchToTop = (wb) => {
    if(window.innerWidth > 750){
        const default_y = 40+"px"
        wb.style.top = default_y
    }
}
moveWorkBenchToBottom(footer,wb)
// window.onresize = e =>{
//     moveWorkBenchToBottom(footer,wb)
//     moveWorkBenchToTop(wb)
// }

window.onload=e=>{
    document.getElementById('canvas').style.height = window.innerHeight - (window.innerWidth>750 ? 350 : 325) +"px";
    document.getElementById('canvas').style.width = window.innerWidth-100 +"px"
}
window.onresize=e=>{
    moveWorkBenchToBottom(footer,wb)
    moveWorkBenchToTop(wb)
    document.getElementById('canvas').style.height = window.innerHeight - (window.innerWidth>750 ? 350 : 325) +"px";
    document.getElementById('canvas').style.width = window.innerWidth-100 +"px"
}