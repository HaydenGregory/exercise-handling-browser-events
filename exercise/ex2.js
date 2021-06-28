// find thing to check
const username = document.getElementById('username')
const userSignUp = document.getElementById('user-sign-up')
const aboutMe = document.getElementById('about-me')
const submit = document.getElementById('submit')
// event listen for submit
username.addEventListener("change", function(event){
    const nameLength = username.value.length
    if (nameLength > 15){
        username.setCustomValidity("Username is too long. Max 15 characters.")
        event.preventDefault()
    }
    else {
        username.setCustomValidity('')
    }
    console.log(nameLength)
})

aboutMe.addEventListener('change', function(event){
    searchWord = aboutMe.value.toLowerCase().indexOf("disc")
    if (searchWord === -1){
        aboutMe.setCustomValidity('We only like people who play disc golf. Sorry!')
        event.preventDefault()
    }
    else {
        aboutMe.setCustomValidity("")
    }
})
