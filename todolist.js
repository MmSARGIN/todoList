let formDOM = document.querySelector("#send");
let toDo = document.querySelector("#info");
let btnDOM = document.querySelector("#subbtn");
let ulDOM = document.querySelector("#list");
let lidom = document.querySelector("li");
let resDOM = document.querySelector("#reset");



btnDOM.addEventListener("click", myFunc);

function myFunc(event) {
  event.preventDefault();
  if (toDo.value) {
    let liDOM = document.createElement("li");
    ulDOM.append(liDOM);
    liDOM.innerHTML = toDo.value
    liDOM.addEventListener("click", lineFunc);
    toDo.value = ""
function lineFunc() {
  liDOM.style.textDecorationLine = "line-through";
}
liDOM.addEventListener("dblclick", delFunc);
function delFunc() {
  liDOM.remove();
}

resDOM.addEventListener("click", clearDom)


    alert("Bilgi ekleniyor");
  } else {
    alert("Listeye boş ekleme yapamazsınız");
  }
  
}

function clearDom() {
    ulDOM.remove()
    toDo.value = ""
    }




