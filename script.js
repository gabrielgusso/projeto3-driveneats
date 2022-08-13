
function selectfood(buttomclass) {
    const selectbuttom = document.querySelector('.foods .select');

    if (selectbuttom !== null) {
        selectbuttom.classList.remove('select');
    }

    if (selectbuttom !== null) {
       const icons = document.querySelectorAll('.icon')
       for(const icon of icons){
        if(!icon.classList.contains('display')){
            icon.classList.add('display')
        }
       }
    }

    const selector = "." + buttomclass;

    const buttom = document.querySelector(selector);
    buttom.classList.add('select');
    
    const icon = document.querySelector('.' + buttomclass + ' .icon')
    
    icon.classList.remove('display')
   
 }

 function selectdrink(buttomclass) {
    const selectbuttom = document.querySelector('.drinks .select');
 
    if (selectbuttom !== null) {
        selectbuttom.classList.remove('select');
    }

    if (selectbuttom !== null) {
        const icons = document.querySelectorAll('.icon')
        for(const icon of icons){
         if(!icon.classList.contains('display')){
             icon.classList.add('display')
         }
        }
    }
 
    const selector = "." + buttomclass;
 
    const buttom = document.querySelector(selector);
    buttom.classList.add('select');

    const icon = document.querySelector('.' + buttomclass + ' .icon')
    
    icon.classList.remove('display')
 }

 function selectdessert(buttomclass) {
    const selectbuttom = document.querySelector('.desserts .select');
 
    if (selectbuttom !== null) {
        selectbuttom.classList.remove('select');
    }

    if (selectbuttom !== null) {
        const icons = document.querySelectorAll('.icon')
        for(const icon of icons){
         if(!icon.classList.contains('display')){
             icon.classList.add('display')
         }
        }
    }
 
    const selector = "." + buttomclass;
 
    const buttom = document.querySelector(selector);
    buttom.classList.add('select');

    const icon = document.querySelector('.' + buttomclass + ' .icon')
    
    icon.classList.remove('display')
 }

















 
//  function selectIcon(buttomclass){
//     const icon = document.querySelector('.foods .icon')
   
//     if (selectbuttom !== null) {
//         icon.classList.add('display')
//     }

//     const selector = "." + buttomclass;

//     const iconselect = document.querySelector(selector);
//     iconselect.classList.remove('display');
//  }