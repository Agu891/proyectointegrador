const addButtons = document.querySelector("button")
const shoppingCart = document.querySelector("#shoppingCart")
const productos = []
const span = document.createElement('span')
span.innerHTML = ""
const total = document.querySelector('#total')
const ul = document.createElement('ul')
const li = document.createElement('li')




function addToCart (precio,nombre) {
    productos.push({Precio: precio , Nombre: nombre})
   
    span.innerHTML = productos.length
    shoppingCart.appendChild(span)
    span.style.position = "absolute"
    console.log(productos)
}

  function seeShoppingCart() {
    
function see() {
 li.innerHTML = ""
 shoppingCart.appendChild(ul)
 ul.appendChild(li)
 let sumaTotal = 0
 for( let i = 0; i <productos.length; i++){ 
 li.innerHTML += `${productos[i].Nombre} =
 
                 $ ${productos[i].Precio} || `           
 setTimeout(()=> li.classList.add("animate"), i*500)
 sumaTotal += productos[i].Precio
} 
li.innerHTML += "TOTAL:" +"$"+ sumaTotal
li.style.position= "absolute"
li.classList.remove("animate")}




function unsee() {
    ul.removeChild(li)
}

if(ul.hasChildNodes()){
    unsee()
    
} else {
    see()
    
}

}



