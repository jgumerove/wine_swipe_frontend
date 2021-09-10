const api = new ApiService("http://localhost:3000")




function renderWines() {
api.getWines()
.then(wines => {
    wines.forEach(wine => {
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
    })
})
}

renderWines()

