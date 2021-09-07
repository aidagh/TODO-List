
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList = "item";
//   const inputValue = document.querySelector("#stuff").value;
//   // Checking for input value to not be empty
//   if (inputValue !== "") {
//     // PUSHING THE INPUT TO A NEW TEXTNODE WE HAVE CREATED!
//     const textnode = document.createTextNode(`${inputValue}`);
//     newItem.appendChild(textnode);
    
//     const list = document.querySelector("#listItems");
//     list.insertBefore(newItem, list.childNodes[null]);
//     document.querySelector("#stuff").value = "";
//   }
// });


const button = document.querySelector("#button");
const todos = [];
button.addEventListener("click", function () {
  const inputValue = document.querySelector("#stuff").value;
  if (inputValue !== "") {
  todos.push(inputValue);
  const list = document.querySelector("#listItems");
  list.innerHTML = ''; //Reset the list content whenever we print the todos, so we don't end up with duplicate todo items.

    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li');
        const listItem = li.appendChild(document.createTextNode(todos[i]));
        list.appendChild(listItem);
    }
    document.querySelector("#stuff").value = "";
  }
});