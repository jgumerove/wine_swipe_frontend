const api = new ApiService("http://localhost:3000")

    
//create all the wines below
    function createWines () {
        api.getWines()
        .then(wines => {
            wines.forEach(wine => {
                debugger
                let newWine = new Wine(wine)
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
        `
        document.querySelector("#card-container-list-unswiped").innerHTML += wineMarkup
    }
    
    function addEventListeners () {
        const wineCard = document.getElementById("card-container-list-unswiped")
        wineCard.addEventListener("click", likeWine)
    }

    function likeWine(e) {
        if (e.target.tagName == "BUTTON" && e.target == document.querySelector(".yes-like")) {
            const changeClass = e.target.closest(".card-unswiped")
            changeClass.className = "card-swiped"
            document.getElementById("card-container-list-swiped").appendChild(changeClass)
        }
    }
    
    //call the function above 
    //note the renderWine function is in the createWines function 
    createWines()
    addEventListeners()
    
    
    