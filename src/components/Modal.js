class Modal {

    constructor() {
        this.addCloseEventListener()
    }
     
    //grab the element
    get modalElement () {
        return document.querySelector("#myModal")
    };

    get modalElementLikes () {
        return document.querySelector("#myModalLikes")
    };
    
    //grab the main part to add content to
    get mainModal () {
        return document.getElementById("modal-main")
    };

    get mainModalLikes () {
        return document.getElementById("modal-main-likes")
    }

    //use the getter to open element by displaying in block
    open = () => {
        this.modalElement.style.display = "block"
    };

    openLikes = () => {
        this.modalElementLikes.style.display = "block"
    };

    //use getter to close by changing display to none 
    close = () => {
        this.modalElement.style.display = "none"
    };

    closeLikes = () => {
        this.modalElementLikes.style.display = "none"
    };

    addCloseEventListener = () => {
        this.modalElement.addEventListener("click", (e) => {
            if (e.target.classList.contains("close") || e.target.id == "myModal") {
                this.close()
            }
        })
    };
    
}