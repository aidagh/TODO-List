const button = document.querySelector("#button");
function remove(elemet) {
  elemet.parentNode.removeChild(elemet);
}

button.addEventListener("click", function () {
  const checkmark = document.createElement("img");
  checkmark.src = "checkMark.svg";
  checkmark.id = "check";
  const newItem = document.createElement("li");
  newItem.classList = "item";
  const trash = document.createElement("img");
  trash.src = "trash.svg";
  trash.id = "trash";
  const inputValue = document.querySelector("#stuff").value;
  // Checking for input value to not be empty
  if (inputValue !== "") {
    // PUSHING THE INPUT TO A NEW TEXTNODE WE HAVE CREATED!
    const textnode = document.createTextNode(`${inputValue}`);
    newItem.appendChild(checkmark);
    newItem.appendChild(textnode);
    newItem.appendChild(trash);

    const list = document.querySelector("#listItems");
    list.insertBefore(newItem, list.childNodes[null]);
    document.querySelector("#stuff").value = "";
    trash.addEventListener("click", function () {
      remove(newItem);
    });
  }
});
