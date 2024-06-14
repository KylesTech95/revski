const handleIcon = (burger,counter) => {
const children = [...burger.children];
let one,two,three;
    one = children[0];
    two = children[1]
    three = children[2]
if(/1/.test(counter)){
    two.style.opacity = 0;
    two.style.transform='translate(0,18px) '
    // rotate one 45 deg
    one.style.transform='rotate(45deg) translate(20px,18px) '
    // rotate three -45 deg
    three.style.transform='rotate(-45deg)'
}
else{
    two.style.opacity = 1;
    two.style.transform='translate(0,0) '
    // rotate one 0 deg
    one.style.transform='rotate(0deg)'
    // rotate three 0 deg
    three.style.transform='rotate(0deg)'
}
}

export default handleIcon