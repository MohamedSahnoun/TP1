let colorInput = document.querySelector("#col");
let content = document.querySelector("#text");

document.getElementById('mySelect').addEventListener('change', function(){
    content.style.fontFamily = this.value;
  });
    
    
    
     colorInput.addEventListener("change", () => {
      let color = colorInput.value;
      content.style.color = color;
});