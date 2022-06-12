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
    let act = document.querySelectorAll(".nav>li>a")
    act.forEach(acti => {
        acti.addEventListener("click", () => {
            act.forEach(activ => activ.classList.remove("active"))
            acti.classList.add("active");
        })
    })
