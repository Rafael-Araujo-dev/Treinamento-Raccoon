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
        phone=phone.replace(/D/g,"");             //Remove tudo o que não é dígito
        phone=phone.replace(/^(d{2})(d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        phone=phone.replace(/(d)(d{4})$/,"$1-$2"); 
        console.log(phone);
        var value = phone.toString();
        var formatted = value.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
        alert(formatted);
        return (
            formPhone.value = phone
        )
    }
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}