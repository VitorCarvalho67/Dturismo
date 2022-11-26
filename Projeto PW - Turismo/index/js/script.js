blb = document.getElementById("btnl");
BTN = document.getElementById("btn1");
bl = document.getElementById("anside");

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

function inicializar() {
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
}

var pesquisa = document.getElementById("inp").value;
pb = document.getElementById("pbtn");

pb.addEventListener("click", () =>{
    
    
    if(pesquisa.indexOf("lugares")){
        console.log("oi");
        href(/lugares/lugares.html);
    }
    if(pesquisa.contains("pacotes")){
        ../pacotes/pacotes.html
    }
    if(pesquisa.contains("preço")){
        ../preço/preço.html
    }
    if(pesquisa.contains("mapa")){
        ../index/index.html/mapa
    }
    if(pesquisa.contains("lugares")){
        ../index/index.html/cupons
    }

})
    

