const orderType = document.getElementById("order-type")
const deliveryField = document.getElementById('address-f')

orderType.addEventListener("change", function(event){
    console.log("changed")
    if (orderType.value === "Delivery") {
        deliveryField.removeAttribute('hidden')
    }
    else {
        deliveryField.setAttribute('hidden','hidden')
    }
})
