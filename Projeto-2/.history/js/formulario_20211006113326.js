window.onload = function () {
    var modal = document.getElementById("modal");
    closeModal();
    var btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", closeModal);

    function closeModal() {
        modal.style.visibility = "hidden";
    }


    var formPhone = document.getElementById("form-phone");
    function phoneMask() {

    }

}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}var phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });