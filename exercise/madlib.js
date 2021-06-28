const madLibForm = document.getElementById("madLibForm")
const madLibStory = document.getElementById("madLibStory")
const restartButton = document.getElementById('restart')
const animalH = document.getElementsByClassName("animal")
const animal = document.getElementById('animal')
const countryH = document.getElementsByClassName("country")
const country = document.getElementById("country")
const pluralNounH = document.getElementsByClassName("pluralNoun")
const pluralNoun = document.getElementById('pluralNoun')
const foodH = document.getElementsByClassName("food")
const food = document.getElementById('food')
const deviceH = document.getElementsByClassName("device")
const device = document.getElementById('device')
const adjectiveH = document.getElementsByClassName("adjective")
const adjective = document.getElementById('adjective')
const country2H = document.getElementsByClassName("country2")
const country2 = document.getElementById('country2')
const adjective2H = document.getElementsByClassName("adjective2")
const adjective2 = document.getElementById('adjective2')
const device2H = document.getElementsByClassName("device2")
const device2 = document.getElementById('device2')
const nounH = document.getElementsByClassName("noun")
const noun = document.getElementById('noun')


madLibForm.addEventListener("submit", function(event){
    event.preventDefault();
    animalH[0].innerHTML = animal.value;
    countryH[0].innerHTML = country.value;
    pluralNounH[0].innerHTML = pluralNoun.value;
    foodH[0].innerHTML = food.value;
    deviceH[0].innerHTML = device.value;
    nounH[0].innerHTML = noun.value;
    adjectiveH[0].innerHTML = adjective.value;
    country2H[0].innerHTML = country2.value;
    adjective2H[0].innerHTML = adjective2.value;
    device2H[0].innerHTML = device2.value
    madLibStory.style.display = "block";
})

restartButton.addEventListener("click", function(event){
    location.reload();
})