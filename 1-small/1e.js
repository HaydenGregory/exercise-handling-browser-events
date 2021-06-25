const button1 = document.getElementById('button')
const button2 = document.getElementById('button2')


button1.addEventListener("click", function(){
    alert('Button Pressed')
})

button2.addEventListener('click', function(event){
    console.log('clicked')
    alert(`MouseX: ${event.screenX}, MouseY: ${event.screenY}`)
})