window.onload = function () {

    var modal = document.getElementById("modal");

    var btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", closeModal);

    var btnOpenModalClassName = "i-am-interested";
        btnOpenModal = document.getElementsByClassName(btnOpenModalClassName);

    function closeModal() {
        modal.style.visibility = "hidden";
    }
}