const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

//Functions
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function addItem(e) {
  e.preventDefault();
  //validate input
  const newItem = itemInput.value.trim();
  if (newItem === "") {
    alert("Item holder cannot be empty...");
    return;
  }

  // create li item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = "";
}

//Event Listeners
itemForm.addEventListener("submit", addItem);
