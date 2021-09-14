class Wine {

    constructor (data) {
        this.id = data.id
        this.name = data.name
        this.image = data.image
        this.category = data.category
        Wine.all.push(this)
        debugger

    }

}

Wine.all = []







// class Wine {

//     constructor (wineObj) {
//         this.WineObj = wineObj  
//     }

//     static createWines = () => {
//         api.getWines()
//         .then(wines => {
//             wines.forEach(wine => {
//                 const wineMarkup = `
//         <div class="card-unswiped" data-id=${wine.id}>
//             <h3>${wine.name}</h3>
//             <h5>${wine.category}</h5>
//             <img src=${wine.image} width="200" height="250">
//             <br>
//             <button class="yes-like">X</button>
//             <button class="no-dislike">✔</button>
//         </div>
//         <br><br>
//         `
//         document.querySelector("#card-container-list-unswiped").innerHTML += wineMarkup
//             })
//         })

//     }

    

// }
//this.wineObj will equal each wine object from the fetch