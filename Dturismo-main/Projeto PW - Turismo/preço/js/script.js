volt = document.getElementById("reset");
next = document.getElementById("next");

next.addEventListener("click", () =>{

    if(main.classList.contains("main-1")){
        main.classList.add("main-2");
        main.classList.remove("main-1");
    }
    else if(main.classList.contains("main-2")){
        main.classList.add("main-3");
        main.classList.remove("main-2");
    }
    else{
        main.classList.add("main-1");
        main.classList.remove("main-3");
        }
    }
)

volt.addEventListener("click", () =>{

    if(main.classList.contains("main-1")){
        main.classList.add("main-3");
        main.classList.remove("main-1");
    } 
    else if(main.classList.contains("main-3")){
        main.classList.add("main-2");
        main.classList.remove("main-3");
    }
    else{
        main.classList.add("main-1");
        main.classList.remove("main-2");
        }
    }
)