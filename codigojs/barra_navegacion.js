function searchCharacters() {
    let input = document.getElementById("search").value.toLowerCase();
    let productos = document.getElementsByClassName("producto")

    for(let i=0; i < productos.length; i++){
    let nombreProducto = productos[i].getElementsByTagName("dt")[0].innerText.toLowerCase();

    if(nombreProducto.includes(input)) {
    productos[i].style.display = "table";
    } 
    else {
    productos[i].style.display = "none"
    }
    }

}