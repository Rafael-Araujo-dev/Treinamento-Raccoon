const carousel = document.querySelector('.items');

const proximoItemCarousel = () => {
    return (
       console.log(carousel.scrollLeft)
    );
}

const anteriorItemCarousel = () => {
    return (
        alert('anterior')
    );
}

var itemClassName = "item";
    items = document.getElementsByClassName(itemClassName);
    totalItems = items.length;
    slide = 0;
    moving = true;

console.log (totalItems);