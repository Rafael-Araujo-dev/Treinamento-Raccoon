window.onload = function () {
    var modal = document.getElementById("modal");
    closeModal();
    var btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", closeModal);

    function closeModal() {
        modal.style.visibility = "hidden";
    }


    var formPhone = document.getElementById("form-phone");
        formPhone.addEventListener('input', handle_formPhone);

    function handle_formPhone(e) {
        e.target.value = phoneMask(e.target.value);
    }

    const phoneMask = (phone) => {
        console.log(phone);
        phone = 2;
        return (
            formPhone.value = phone
        )
    }
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}