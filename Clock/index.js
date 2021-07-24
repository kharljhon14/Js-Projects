document.querySelectorAll(".content").forEach((item) =>{
    item.addEventListener("click", (evt)=>{
        document.querySelectorAll(".content").forEach((item) =>{
            if(item === evt.target)
                return
            item.classList.toggle("hide")
        })
    })
})