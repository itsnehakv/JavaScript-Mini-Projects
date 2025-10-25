let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("iteminput");
const storageKey = "items"; // this is just a unique identifier for localStorage

// ---------------------------------------------------------------
function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [index, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";

    const text = document.createElement("p");
    text.textContent = item;
    text.style.marginRight = "10px";
    text.style.display = "inline-block";

    const deleteItemButton = document.createElement("button");
    deleteItemButton.textContent = "Delete";
    deleteItemButton.onclick = () => deleteItem(index);
    //we use arrow func, bcs if its not there (= deleteItem(index)) this would run immediately when the page loads and the item would be deleted right away
    //  w/o us clicking the button; It is called a callback function/wrapper function
    container.appendChild(text);
    container.appendChild(deleteItemButton);
    itemsDiv.appendChild(container);
  }
}
renderItems();

//------------------------------------------------------------------
function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) {
    items = JSON.parse(oldItems); //gives array back
    renderItems();
  }
}

//--------------------------------------------------------------------
function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

//--------------------------------------------------------------------
function addItem() {
  const value = input.value;
  if (value === "") {
    alert("Please enter an item.");
    return; //prevents adding empty items
  }
  items.push(value);
  renderItems();
  input.value = ""; //clears input field after adding item
  saveItems();
}

//--------------------------------------------------------------------
function deleteItem(index) {
  items.splice(index, 1); //removes element at given index; 1 is how many elements to remove from that index
  renderItems();
  saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems); //event listener that waits for the HTML document to be fully loaded
