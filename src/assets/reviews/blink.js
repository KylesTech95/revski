// blink button helper function
const blink = (btn) => {
    btn.style.background='red'
  setTimeout(()=>{
      btn.style.background='transparent'
  },125)
  };

  export default blink;