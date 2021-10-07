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

    const handle_formPhone = (e) => {
        var value = e.target.value;
        return phoneMask(value)
    }

    const phoneMask = (phone) => {
        if (phone != undefined) {
            var formatted = phone.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
        }
        return (
            formPhone.value = formatted
        )
    }
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}