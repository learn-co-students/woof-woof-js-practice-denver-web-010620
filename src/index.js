const filterDog = document.querySelector('#filter-div')
const dogBar = document.querySelector('#dog-bar')
const dogContainer = document.querySelector('#dog-summary-container')
const dogInfo = document.querySelector('#dog-info')

const dog_url = "http://localhost:3000/pups/"

fetch(dog_url)
.then(response => response.json())
.then(dogArray => {
    dogArray.map(dogObject => {
        let dogName =  document.createElement('span')
        dogName.textContent = dogObject.name
        dogBar.appendChild(dogName)
        dogName.addEventListener("click", event => {
            event.preventDefault()
            const dogCard = document.createElement('div')
            dogCard.innerHTML = 'card'
            dogCard.innerHTML = `
            <img src="${dogObject.image}">
            <h2>"${dogObject.name}"<h2>
            <button>"Good dog?:${dogObject.isGoodDog}"</button>`
            dogInfo.append(dogCard)

        })
    })
})



// fetch(dog_url)
// .then(response => response.json())
// .then(dogArray => {
//     dogArray.map(dogObject => {
// let dogImage = document.createElement('img')
// let dogName = document.createElement('h2')
// let isGoodDog = document.createElement('button')
// dogImage.src = `"${dogObject.image}"`
// dogName.textContent = dogObject.name
// isGoodDog.textContent = dogObject.isGoodDog
// if(isGoodDog === true){
// isGoodDog.textContent = "Good Dog!"
// } else {
// isGoodDog.textContent = "Bad Dog!"
// }
// dogInfo.append(dogImage, dogName, isGoodDog)
//     })
// })

function createDogCard(){
    
    fetch(dog_url)
    .then(response => response.json())
    .then(dogArray => {
        dogArray.map(dogObject => {
            console.log(dogObject)
            const dogCard = document.createElement('div')
              dogCard.innerHTML = 'card'
              dogCard.innerHTML = `
              <img src="${dogObject.image}">
              <h2>"${dogObject.name}"<h2>
              <button>"Good dog?:${dogObject.isGoodDog}"</button>`
            //   dogInfo.append(dogCard)
        })
    })
    
}
createDogCard()