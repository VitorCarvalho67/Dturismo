volt = document.getElementById("reset");
next = document.getElementById("next");
var input = document.querySelector("#inp");
var btnn = document.querySelector("#pbtn");

blb = document.getElementById("btnl");

input.addEventListener("keypress", function(e){
    
    if (e.key === "Enter"){

        var result = input.value;

        if(result.includes("lugares") || result.include("Lugares") || result.include("locais") || result.include("Locais") || result.include("Pontos") || result.include("pontos")){
        location.href = "../lugares/lugares.html";
    }
    }
    
    
})

btnn.addEventListener("click", () =>{
    
        var result = input.value;

        if(result.includes("lugares") || result.include("Lugares") || result.include("locais") || result.include("Locais") || result.include("Pontos") || result.include("pontos")){
        location.href = "../lugares/lugares.html";
    
    }
    
    
})

blb.addEventListener("click", () =>{
    
    if(anside.classList.contains("fechado")){
        anside.classList.add("aberto");
        anside.classList.remove("fechado");
    }
    else if(anside.classList.contains("aberto")){
        anside.classList.add("fechado");
        anside.classList.remove("aberto");
    }
})


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