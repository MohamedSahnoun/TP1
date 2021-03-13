    let colorInput = document.querySelector("#col");
    let content = document.querySelector("#text");
     colorInput.addEventListener("change", () => {
      let color = colorInput.value;
      content.style.color = color;
});