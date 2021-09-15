class Wine {

    constructor (data) {
        this.data = data
        Wine.all.push(this)
    };
//to create a specific wine
    renderWineCard = () => {
        const { id, name, image, category} = this.data
        return (
        `
        <div class="card-unswiped" data-id=${id}>
        <h3>${name}</h3>
        <h5>${category}</h5>
            <img src=${image} width="200" height="250">
            <br>
            <button class="no-dislike" data-id=${id}>X</button>
            <button class="yes-like" data-id=${id}>✔</button>
        </div>

            `)
        };
//to create all wines
  static createWines = () => {
      const addWine = document.querySelector(".add-new-wine")
      addWine.addEventListener("click", this.openWineModelForm)
            api.getWines()
            .then(wines => {
                wines.forEach(wine => {
                    const newWine = new Wine(wine)
                    newWine.addEventListeners()
                    document.querySelector("#card-container-list-unswiped").insertAdjacentHTML('beforeend', newWine.renderWineCard())
                })
        })
    };
//to add like & dislike functionality 
    addEventListeners = () => {
        const wineCard = document.getElementById("main")
        wineCard.addEventListener("click", (e) => {
            if (e.target.tagName == "BUTTON" && e.target == document.querySelector(".yes-like")) {
                const changeClass = e.target.closest(".card-unswiped")
                changeClass.style.animation ="rightnewmove 2s 1"
                setTimeout(() => {
                    changeClass.className = "card-swiped-liked"
                    document.getElementById("card-container-list-swiped").appendChild(changeClass)
                }, 1000)
            }
            if (e.target.tagName == "BUTTON" && e.target == document.querySelector(".no-dislike")) {
                const changeClass = e.target.closest(".card-unswiped")
                changeClass.style.animation ="leftnewmove 2s 1"
                setTimeout(() => {
                changeClass.className = "card-swiped-disliked"
                document.getElementById("card-container-list-swiped").appendChild(changeClass)
                }, 1000)
                
              }
            }    
        );
        
    };

   //opens form to add a new wine
    static openWineModelForm = () => {
       modal.mainModal.innerHTML = `
      <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname">
     </form>
       `
       modal.open()
    };

}

Wine.all = []







