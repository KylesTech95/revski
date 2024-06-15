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
    document.getElementById('canvas').height = window.innerHeight - 475;
    document.getElementById('canvas').width = window.innerWidth-100
}
window.onresize=e=>{
    moveWorkBenchToBottom(footer,wb)
    moveWorkBenchToTop(wb)
    document.getElementById('canvas').height = window.innerHeight - 475;
    document.getElementById('canvas').width = window.innerWidth-100
}