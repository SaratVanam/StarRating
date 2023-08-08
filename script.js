let star=document.querySelector(".star-container");

let allStars=document.querySelectorAll(".star");
let prevClicked=0;

let rating=document.querySelector("h3");
star.addEventListener("click", function(e){
    let index=parseInt(e.target.classList[1]);
    for(let i=0;i<prevClicked;i++){
        allStars[i].classList.remove("golden");
    }
    for(let i=0;i<index;i++){
        allStars[i].classList.add("golden");
    }
    rating.innerText="Rating: "+ index;
    prevClicked=index;
})


star.addEventListener("mouseover", function(e){
    let index=parseInt(e.target.classList[1]);
    for(let i=0;i<prevClicked;i++){
        allStars[i].classList.remove("golden");
    }
    for(let i=0;i<index;i++){
        allStars[i].classList.add("golden");
    }
    
})


star.addEventListener("mouseleave", function(e){
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("golden");
    }
    for(let i=0;i<prevClicked;i++){
        allStars[i].classList.add("golden");
    }
})