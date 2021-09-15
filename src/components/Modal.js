class Modal {

    get modal () {
        document.querySelector("#myModal")
    }

    open = () => {
        this.modal.style.display = "block"
    }


}