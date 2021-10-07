window.onload = function () {
    

    let handle_formPhone = (e) => {
        var value = e.target.value;
        return phoneMask(value)
    }

    var formPhone = document.getElementById("form-phone");
        formPhone.addEventListener('input', handle_formPhone);

    const phoneMask = (phone) => {
        if (phone != undefined) {
            var formatted = phone.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
        }
        return (
            formPhone.value = formatted
        )
    }
    
}

var modal = document.getElementById("modal");

var btnCloseModal = document.getElementById("btn-close-modal");

btnCloseModal.addEventListener("click", closeModal);

const closeModal = () => {
    modal.style.visibility = "hidden";
}

closeModal();

const openModal = () => {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}