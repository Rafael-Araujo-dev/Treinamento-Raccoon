window.onload = function () {

    var modal = document.getElementById("modal");

    var btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", closeModal);

    var btnOpenModal = document.getElementById("i-am-interested");

    btnOpenModal.addEventListener("click", openModal);

    function closeModal() {
        modal.style.visibility = "hidden";
    }

    function openModal() {
        modal.style.visibility = "visible";
    }
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}