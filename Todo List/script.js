//Selectors

let input = document.querySelector(".inputText");
let ul = document.querySelector("ul");
let enterButton = document.getElementById("enter");
let xBtn = document.querySelector("button");

//funciones

function createLi(){
  if (input.value.length <= 20) {
    input.classList.remove("redField");
    //crear elemento LI
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // agregar X al boton
    let xBtn = document.createElement("button");
    xBtn.appendChild(document.createTextNode("X"));
    li.appendChild(xBtn);

    xBtn.addEventListener("click", function(){
      li.classList.add("delete");
    });

  } else {
    input.classList.add("redField");
    alert("Hasta 20 caracteres!")
  }
}

function createLiPress(event){
  if (event.which === 13) {
    createLi();
  }}

enterButton.addEventListener("click",createLi);
input.addEventListener("keypress",createLiPress);
