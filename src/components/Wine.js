class Wine {

    constructor (data) {
        this.id = data.id
        this.name = data.name
        this.image = data.image
        this.category = data.category
        Wine.all.push(this)

    }

    renderWineCard() {
        return (
        `
        <div class="card-unswiped" data-id=${this.id}>
        <h3>${this.name}</h3>
        <h5>${this.category}</h5>
            <img src=${this.image} width="200" height="250">
            <br>
            <button class="yes-like">X</button>
            <button class="no-dislike">✔</button>
        </div>

            `)
        }


        static createWines = () => { 
            api.getWines()
            .then(wines => {
                wines.forEach(wine => {
                    const newWine = new Wine(wine)
                    document.querySelector("#card-container-list-unswiped").innerHTML += newWine.renderWineCard()
                })
        })
        
    }

}

Wine.all = []






