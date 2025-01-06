const form = document.getElementById("shopping-form");
const input = document.getElementById("item-input");
const list = document.getElementById("shopping-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newItem = input.value.trim();
  if (newItem) {
    const listItem = document.createElement("li");
    listItem.textContent = newItem;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      list.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = "";
    input.focus();
  }
});
