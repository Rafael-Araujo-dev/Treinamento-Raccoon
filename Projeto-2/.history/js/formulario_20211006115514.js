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
        console.log(e);
        var value = e.target.value;
        phoneMask(value);
    }

    const phoneMask = (phone) => {
        if (phone != undefined) {
            console.log("value")
        }
        
        //valor = phone.toString();
        //var formatted = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
        //console.log(formatted);
        return (
            console.log("")
        )
    }
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}