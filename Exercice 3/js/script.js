let inputElt1 = document.getElementById("exampleName");
let inputElt2 = document.getElementById("exampleContent");
let btn = document.getElementById("button");
// on desactive le bouton quand le javascript se charge
btn.disabled = true;
function isCharSet() {
  // on verifie si le champ n'est pas vide alors on desactive le bouton sinon on l'active
  if (inputElt1.value != "" && inputElt2.value != "") {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
btn.addEventListener("click", (e) => {
  var ol = document.querySelector("ul");
  var li = document.createElement("li");
  var t = document.createElement(t);
  var name = document.querySelector("#exampleName");
  var content = document.querySelector("#exampleContent");

  t.setAttribute("class", "fas fa-trash");
  var text = document.createTextNode(name.value + " : " + content.value + " ");
  li.appendChild(text);
  li.appendChild(t);
  li.classList.add("list-group-item");
  ol.appendChild(li);

  t.addEventListener("click", (e) => {
    ol.removeChild(li);
  });
});