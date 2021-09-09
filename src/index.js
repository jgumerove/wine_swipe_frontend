const api = new ApiService("http://localhost:3000")

api.getWines()
.then(wines => {
    wines.forEach(wine => {
        const wineMarkup = `
        <div data-id=${wine.id}>
            <h3>${wine.name}</h3>
            <h5>${wine.category}</h5>
            <img src=${wine.image} width="200" height="250">
            <br>
            <button class="but-nope">X</button>
            <button class="but-yay">✔</button>
        </div>
        <br><br>
        `
        document.querySelector("#card-container-list").innerHTML += wineMarkup
    })
})

