window.onload = function () {

    var modal = document.getElementById("modal");

    var btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", closeModal);

    var btnOpenModalClassName = "i-am-interested";
        btnOpenModal = document.getElementsByClassName(btnOpenModalClassName);

        btnOpenModal.addEventListener("click", closeModal);

    function closeModal() {
        modal.style.visibility = "hidden";
    }
}