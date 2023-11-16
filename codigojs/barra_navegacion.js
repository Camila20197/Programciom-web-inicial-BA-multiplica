function searchCharacters() {
    let input = document.getElementById("search").value.toLowerCase();
    let producto = document.getElementsByClassName("producto")

    for(let i=0; i < producto.length; i++){
    let producto = producto[i].innerHTML.toLowerCase();

    if(producto.includes(input)) {
    producto[i].style.display = "table";
    } 
    else {
    producto[i].style.display = "none"
    }
    }

}