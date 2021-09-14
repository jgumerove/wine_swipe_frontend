const api = new ApiService("http://localhost:3000")

    
//create all the wines below
    function createWines () { 
        api.getWines()
        .then(wines => {
            wines.forEach(wine => {
                const newWine = new Wine(wine)
                document.querySelector("#card-container-list-unswiped").innerHTML += newWine.renderWine()
            })
    })
    
}

//render a specific wine 

    
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
    
    
    