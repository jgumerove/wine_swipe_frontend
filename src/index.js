const api = new ApiService("http://localhost:3000")


// Wine.createWines()


// let addEventListeners = () => {
//     //const unSwipedCards = document.getElementById("card-container-list-unswiped")
//     const wineCard = document.getElementById("card-container-list-unswiped")
//     wineCard.addEventListener("click", likeWine)
// }

// let likeWine = (e) => {
//     console.log(e.target)
//     //e.target.className = "card-swiped"
// }

// addEventListeners()

//create all the wines below
function createWines () {
    api.getWines()
    .then(wines => {
        wines.forEach(wine => {
            renderWine(wine)
        })
    })

}

//render a specific wine 
function renderWine(wine) {
    const wineMarkup = `
    <div class="card-unswiped" data-id=${wine.id}>
        <h3>${wine.name}</h3>
        <h5>${wine.category}</h5>
        <img src=${wine.image} width="200" height="250">
        <br>
        <button class="yes-like">X</button>
        <button class="no-dislike">✔</button>
    </div>
    <br><br>
    `
    document.querySelector("#card-container-list-unswiped").innerHTML += wineMarkup
}
//call the function above 
createWines()


