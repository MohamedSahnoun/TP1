function enableBtn() {
    var one = document.querySelector('input[id="exampleName"]');
    var two = document.querySelector('input[id="exampleContent"]');
    var selectedValue1 = one.value;
    var selectedValue2 = two.value;
    if (selectedValue1 != "" && selectedValue2 != "");
    {
      document.getElementsByClassName("btn btn-primary").disabled = false;
    }
  }
  
  function insert() {
    var block_to_insert;
    var container_block;
    var one = document.querySelector('input[id="exampleName"]');
    var two = document.querySelector('input[id="exampleContent"]');
    var selectedValue1 = one.value;
    var selectedValue2 = two.value;
    console.log(selectedValue1);
    console.log(selectedValue2);
    block_to_insert = document.createElement("div");
    var text = document.createTextNode(one.value + " : " + two.value + " ");
    block_to_insert.innerHTML = text;
    container_block = document.getElementById("democontainer");
    container_block.appendChild(block_to_insert);
    var img = document.createElement("img");
    img.src = "";
    document.getElementById("body").appendChild(img);
    down.innerHTML = "Image Element Added.";
  }