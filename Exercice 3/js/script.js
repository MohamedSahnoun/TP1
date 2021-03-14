var inputElt1 = document.getElementById("case1");
var inputElt2 = document.getElementById("case2");
var btn = document.getElementById("button");
var li = document.getElementById("my-li");

btn.disabled = true;
function isCharSet() {
  // on verifie si le champ n'est pas vide alors on desactive le bouton sinon on l'active
  if (inputElt1.value != "" && inputElt2.value != "") {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
function newli() {
  var li = document.createElement("li");
  li.setAttribute("class", "list-group-item");
  var ul = document.getElementById("my-ul");
  var txt = document.createTextNode("" + case1.value + " " + case2.value + " ");
  var i = document.createElement("i");
  i.setAttribute("class", "fas fa-trash-alt");
  li.appendChild(txt);
  li.appendChild(i);
  ul.appendChild(li);
  i.addEventListener("click", (e) => {
    ul.removeChild(li);
  });
}
btn.addEventListener("click", (e) => {
  newli();
});
