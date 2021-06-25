const form = document.getElementById("newItemForm")
form.addEventListener('submit', function(event){
    event.preventDefault();
    const shopList = document.getElementById("shoppingList")
    const listItem = document.createElement("li")
    shopList.appendChild(listItem)
    listItem.textContent = item.value
})