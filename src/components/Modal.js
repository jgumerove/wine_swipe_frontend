class Modal {

    get modal () {
        document.querySelector("#myModal")
    }

    open = () => {
        this.modal.style.display = "block"
    }

    close = () => {
        this.modal.style.display = "none"
    }
    
}