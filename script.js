
function selectproduct(buttomclass) {
    const selectbuttom = document.querySelector(buttomclass);
 
    if (selectbuttom !== null) {
        selectbuttom.classList.remove("select");
    }
 
    const selector = "." + buttomclass;
 
    const buttom = document.querySelector(selector);
    buttom.classList.add("select");
 }

