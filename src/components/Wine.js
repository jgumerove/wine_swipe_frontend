class Wine {

    constructor (data) {
        this.id = data.id
        this.name = data.name
        this.image = data.image
        this.category = data.category
        Wine.all.push(this)

    };

    renderWineCard = () => {
        return (
        `
        <div class="card-unswiped" data-id=${this.id}>
        <h3>${this.name}</h3>
        <h5>${this.category}</h5>
            <img src=${this.image} width="200" height="250">
            <br>
            <button class="no-dislike">X</button>
            <button class="yes-like">✔</button>
        </div>

            `)
        };


        static createWines = () => { 
            api.getWines()
            .then(wines => {
                wines.forEach(wine => {
                    const newWine = new Wine(wine)
                    document.querySelector("#card-container-list-unswiped").innerHTML += newWine.renderWineCard()
                })
        })
    };

    static addEventListeners = () => {
        const wineCard = document.getElementById("card-container-list-unswiped")
        wineCard.addEventListener("click", (e) => {
            if (e.target.tagName == "BUTTON" && e.target == document.querySelector(".yes-like")) {
                const changeClass = e.target.closest(".card-unswiped")
                changeClass.className = "card-swiped"
                document.getElementById("card-container-list-swiped").appendChild(changeClass)
            }    
        })
    };

}

Wine.all = []
//work on adding the below as methods in class 
// function addEventListeners () {
//     const wineCard = document.getElementById("card-container-list-unswiped")
//     wineCard.addEventListener("click", likeWine)
// }

// function likeWine(e) {
//     if (e.target.tagName == "BUTTON" && e.target == document.querySelector(".yes-like")) {
//         const changeClass = e.target.closest(".card-unswiped")
//         changeClass.className = "card-swiped"
//         document.getElementById("card-container-list-swiped").appendChild(changeClass)
//     }
// }






