const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const filterItem = document.getElementById("filter");
const clear = document.getElementById("clear");

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
  checkUI();
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
  checkUI();
}

function clearItem(e) {
  console.log("clicked");
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function checkUI() {
  const items = document.querySelectorAll("li");

  if (items.length === 0) {
    filterItem.style.display = "none";
    clear.style.display = "none";
  } else {
    filterItem.style.display = "block";
    clear.style.display = "block";
  }
}
function itemFilter(e) {
  const items = document.querySelectorAll("li");

  const text = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
window.localStorage.setItem("name", "Rohan");

//Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clear.addEventListener("click", clearItem);
filterItem.addEventListener("input", itemFilter);

checkUI();
