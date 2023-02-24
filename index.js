// document.addEventListener('keyup',(e)=>{
//     console.log(e.key)
// })
let inputs = document.querySelectorAll("input"),
    one = document.querySelector(".one"),
    submit = document.querySelector(".submit"),
    inputField = 0,
    next = (element)=>{
        return element.nextElementSibling
    },
    before = (element)=>{
        return element.previousElementSibling
    }

one.focus()
inputs.forEach((input, index) => {
input.addEventListener('keyup', (e)=>{

    if (e.key == "ArrowRight" && index!=inputs.length -1) {
        next(input).focus()
        
    }
    if (e.key == "ArrowLeft" && index!=0) {
        before(input).focus()
        
    }

    e.target.value = e.target.value.replace(/[^0-9]/g,"")

    if (input.value.length == 1 && e.key !== "Backspace") {
        inputField+=1
        if (index!=inputs.length -1) {
            next(input).focus()
        }else{
            input.blur()
        } 
    }else if (input.value.length ==0 && e.key =="Backspace") {
        inputField-=1
        if (index!=0) {
            before(input).focus()
        }
    }
    
    if (inputField == inputs.length) {
        submit.classList.remove("hide")
        submit.classList.add("show")
    }else{
        submit.classList.remove("show")
        submit.classList.add("hide")
    }
})
})
submit.addEventListener('click',()=>{
    alert("Success")
})

//   if (input.value.length ==1 ) 
//   {
     
//     if ( index!=inputs.length-1) {
//         next(input).focus() 
//     }else{
//         input.blur()
//     }
//    }else if (input.value.length==0 && e.key == "Backspace"  && index!=0) 
//      {
//         before(input).focus()
         
//       }
//     if (input.value.length == 1 && e.key != "Backspace") {
//         inputField+=1;
        
//     }
//     if (input.value.length == 1 && e.key =="Backspace") {
//         inputField-=1
//     }
//  else if(input.value==1 && e.key=="Backspace"&& index==inputs.length){
//  before(input).focus()
//   }
//  if (index == inputs.length -2 ) {
//     input.blur()
//    document.addEventListener('keyup',()=>{
//     input.blur()
//    })
    
//  }
