window.onload = function() {
    var itemClassName = "item";
    items = document.getElementsByClassName(itemClassName);
    totalItems = items.length;
    slide = 0;
    moving = true;

    function setInitialClasses() {
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }
}

const proximoItemCarousel = () => {
    return (
       alert('proximo')
    );
}

const anteriorItemCarousel = () => {
    return (
        alert('anterior')
    );
}



