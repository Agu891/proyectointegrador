const addButtons = document.querySelector("button")
const shoppingCart = document.querySelector("#shoppingCart")
const productos = []
const span = document.createElement('span')
span.innerHTML = ""
const total = document.querySelector('#total')
const ul = document.createElement('ul')





function addToCart (precio,nombre , img) {
    productos.push({precio: precio , nombre: nombre , img : img})
   
    span.innerHTML = productos.length
    shoppingCart.appendChild(span)
    span.style.position = "absolute"
    console.log(productos)
    
}

  function seeShoppingCart() {
 
    function see() {
        total.appendChild(ul)
        let sumaTotal = 0
        for (let i = 0; i<productos.length; i++){
            sumaTotal += productos[i].precio
            const liNombre = document.createElement('li')
            ul.appendChild(liNombre)
           
            liNombre.innerHTML = productos[i].nombre + `<img id= "imagenCarrito" src ="${productos[i].img}">` + "$" + productos[i].precio 
            setTimeout(()=> liNombre.classList.add("animate"), i*500) 
                     
        }
        const precioFinal = document.createElement('p')
        total.appendChild(precioFinal)
        precioFinal.innerHTML =`TOTAL: $${sumaTotal}` 
        setTimeout(()=> precioFinal.classList.add("animate"), 500)
        console.log(sumaTotal)
        
       } 
   function unsee() {
    ul.innerHTML = ""
    total.innerHTML = ""
   }
  
  if(ul.hasChildNodes()){
    unsee()
  }else{
    see()
  }

  


}



