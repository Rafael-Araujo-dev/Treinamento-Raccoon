window.onload = function () {

    var modal = document.getElementById("modal");

    var btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", closeModal);

    var btnOpenModalClassName = "i-am-interested";
    var btnOpenModal = document.getElementsByClassName(btnOpenModalClassName);

    btnOpenModal.addEventListener("click", openModal);

    function closeModal() {
        modal.style.visibility = "hidden";
    }

    function openModal() {
        modal.style.visibility = "visible";
    }
}