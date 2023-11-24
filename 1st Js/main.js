const selectL = document.getElementById('addItem');
      table = document.querySelector("table");
selectL.addEventListener("click", function() {
  let newName = prompt("Masukkan Nama!");
      newAge = parseInt(prompt("Masukkan Usia!"));
  if ( newName == "" || newAge == "" || typeof(newAge) != "number") {
    alert("Yg bener lah goblok!!");
  } else if ( !newName || !newAge || newName == " ") {
  alert("Hadahh.. taikk lu!");
  } else {
    const newTr = document.createElement("tr");
        newTd1 = document.createElement("td");
        newTd2 = document.createElement("td");
        newListName = document.createTextNode(newName);
        newListAge = document.createTextNode(newAge);
      newTd1.appendChild(newListName);
      newTd2.appendChild(newListAge);
      newTr.appendChild(newTd1);
      newTr.appendChild(newTd2);
      table.appendChild(newTr);
    
    
  }
  
  
  
  
  
  
});