const api = new ApiService("http://localhost:3000")


Wine.createWines()


let addEventListeners = () => {
    //const unSwipedCards = document.getElementById("card-container-list-unswiped")
    document.addEventListener("click", likeWine)
}

let likeWine = (e) => {
    console.log(e.target)
}

addEventListeners()


