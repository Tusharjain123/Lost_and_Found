let btn=document.querySelector(".btn")
btn.addEventListener("click",()=>{
    let jsbtn=document.querySelector(".jsbtn")
    if (jsbtn.style.display=="none"){
        jsbtn.style.display="block"
    }
    else{
        jsbtn.style.display="none"
    }
})
