var list = document.getElementById("list");

function addToDo() {
  var todo_Item = document.getElementById("to-do-item");
  var li = document.createElement("li");

  var liText = document.createTextNode(todo_Item.value);
  li.appendChild(liText);
  

  var delBtn = document.createElement("button");
  var delTxt = document.createTextNode("Delete");
  delBtn.setAttribute("class", "btn btn-success  ml-1 mt-1");
  delBtn.setAttribute("onClick", "delItem(this)");
  delBtn.appendChild(delTxt);

  var editBtn = document.createElement("button");
  var editTxt = document.createTextNode("Edit");
  editBtn.setAttribute("class", "btn btn-info ml-1 mt-1 text-white");
  editBtn.appendChild(editTxt);
  editBtn.setAttribute("onClick", "editItem(this)");

  li.appendChild(delBtn);
  li.appendChild(editBtn);
  adding_activity(li, todo_Item);
}

function adding_activity(li, todo_Item) {
  var add_item = document.getElementById("to-do-item");
  if (add_item.value == "") {
    alert("You can not leave it blank");
  } else {
    list.appendChild(li);
    todo_Item.value = "";
  }
}

function delItem(e) {
  e.parentNode.remove();
}

function delAll() {
  list.innerHTML = "";
}

function editItem(e) {
  var val = prompt("Enter new value", e.parentNode.firstChild.nodeValue);

  if (val == "") {
    alert("You can not leave it blank");
    var val = prompt("Enter new value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
  } else {
    e.parentNode.firstChild.nodeValue = val;
  }
}
