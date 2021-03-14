let content = document.querySelector("#text");

document.getElementById('police').addEventListener('change', function(){
    content.style.fontSize = this.value +"px";
});

document.getElementById('mySelect').addEventListener('change', function(){
  content.style.fontFamily = this.value;
});
    
    
document.getElementById("color").addEventListener('change', function(){
      content.style.color = this.value;
});