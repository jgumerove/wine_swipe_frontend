class Wine {

    constructor (data) {
        this.data = data
        this.likeCount = 0
        Wine.all.push(this)
      };

        //to create a specific wine
        renderWineCard = () => {
        const { id, name, image, category, username, price} = this.data
        return (
            `
            <div class="card-unswiped" data-id=${id}>
            <h5>Seller: ${username}</h5>
            <h5>Title: ${name}</h5>
            <h5>Type: ${category}</h5>
            <h5>Price: $${price}</h5>
                <img src=${image} width="200" height="250">
                <br>
                <button class="no-dislike" data-id=${id}>X</button>
                <button class="yes-like" data-id=${id}>✔</button>
            </div>

            `)
        };

        //to create all wines
        static createWines = () => {
            document.getElementById("add-new").style.display = "block"
            document.getElementById("view-likes").style.display = "block"
            document.querySelector("#card-container-list-unswiped").innerHTML = ""
            const addWine = document.querySelector(".add-new-wine")
            const viewLikes = document.querySelector(".view-liked-wines")
            addWine.addEventListener("click", this.openWineModalForm)
            viewLikes.addEventListener("click", modal.openLikes)
            api.getWines()
            .then(wines => {
                wines.forEach(wine => {
                    const newWine = new Wine(wine)
                    newWine.addEventListeners()
                    document.querySelector("#card-container-list-unswiped").
                    insertAdjacentHTML('beforeend', newWine.renderWineCard())
                })
        })
    };

    //to add like & dislike functionality 
    addEventListeners = () => {
        const wineCard = document.getElementById("main")
        wineCard.addEventListener("click", (e) => {
            if (e.target.tagName == "BUTTON" && e.target == document.querySelector(".yes-like")) {
                const changeClass = e.target.closest(".card-unswiped")
                changeClass.style.animation ="rightnewmove 1s 1"
                setTimeout(() => {
                    this.increaseLikeCount()
                    changeClass.className = "card-swiped-liked"
                    changeClass.style.animation = null
                    document.getElementById("card-container-list-swiped-liked").appendChild(changeClass)
                }, 1000)
            }
            if (e.target.tagName == "BUTTON" && e.target == document.querySelector(".no-dislike")) {
                const changeClass = e.target.closest(".card-unswiped")
                changeClass.style.animation ="leftnewmove 1s 1"
                setTimeout(() => {
                changeClass.className = "card-swiped-disliked"
                document.getElementById("card-container-list-swiped").appendChild(changeClass)
                }, 1000)
                
              }
            }    
        ); 
    };

   //to increase the amount of likes displayed
    increaseLikeCount() {
        this.likeCount += 1
        let countLikes = document.querySelector(".view-liked-wines")
        countLikes.innerHTML = `View Liked Wines (${this.likeCount})`
    };
    
    //opens form to add a new wine
        static openWineModalForm = () => {
        modal.mainModal.innerHTML = `
        <form>
            <label for="name">Name:</label><br>
            <input type="text" name="name"><br>
            <label for="category">Category:</label><br>
            <input type="text" name="category"><br>
            <label for="price">Price:</label><br>
            <input type="text" name="price"><br>
            <label for="image">Image:</label><br>
            <input type="text" name="image"><br>
            <input type="submit" value="Add a Wine"><br>
        </form>
        `
        modal.mainModal.querySelector("form").addEventListener("submit", this.handleSubmit)
        modal.open()
        };
    
    //add a new wine to page after form button pushed   
    static handleSubmit = (e) => {
        e.preventDefault()
        const newWine = {
            name: e.target.name.value,
            category: e.target.category.value,
            price: e.target.price.value,
            image: e.target.image.value
        }
        api.addWine(newWine).then(wine => {
            const wineCard = new Wine(wine)
            document.querySelector("#card-container-list-unswiped").
            insertAdjacentHTML('beforeend', wineCard.renderWineCard())
        })
        e.target.reset()
    }

}

Wine.all = []







