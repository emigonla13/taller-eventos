function saludar(e) {
e.stopPropagation()
alert('Hola!')
}


var div = document.querySelector("div")
div.addEventListener("click", (event)=> {
    event.stopPropagation();
    alert("Hola! Soy el div");
    
});

