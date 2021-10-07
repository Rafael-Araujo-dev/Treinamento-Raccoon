window.onload = function () {
    var modal = document.getElementById("modal");
    closeModal();
    var btnCloseModal = document.getElementById("btn-close-modal");
    btnCloseModal.addEventListener("click", closeModal);

    function closeModal() {
        modal.style.visibility = "hidden";
    }


    var formPhone = document.getElementById("form-phone");
        formPhone.addEventListener('change', handle_formPhone);

    function handle_formPhone(e) {
        e.target.value = phoneMask(e.target.value);
    }

    const phoneMask = (phone) => {
        console.log(phone);
        phone.replace(/\D/g, ''),
        phone.replace(/^(\d)/, '($1'),
        phone.replace(/^(\(\d{2})(\d)/, '$1) $2'),
        phone.replace(/(\d{4})(\d{1,5})/, '$1-$2'),
        phone.replace(/(-\d{5})\d+?$/, '$1');
        return (
            formPhone.value = phone
        )
    }
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
}