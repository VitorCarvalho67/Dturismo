blb = document.getElementById("btnl");
BTN = document.getElementById("btn1");
bl = document.getElementById("anside");
var input = document.querySelector("#inp");
var btnn = document.querySelector("#pbtn");

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


BTN.addEventListener("click", () =>{

Nome = document.getElementById("Nome").value;
Email = document.getElementById("email").value;

    if(Nome == "" || Email ==""){
        alert("Prencha os campos");
    }
    else{
        alert("Obrigado");
        document.location.href = email + encodeURIComponent(Nome)+ "&body=" + encodeURIComponent("Promoção!!!!!!");
        document.getElementById("Nome").value="";
        document.getElementById("email").value="";
    }
})


    var coordenadas = {lat: -22.912869, lng: -43.228963};

    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 15,
      center: coordenadas 
    });

    var marker = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: 'Meu marcador'
    });