const carousel = document.getElementById('#items');

window.addEventListener("scroll", (event) => {
   let scroll = this.scrollX;
   console.log(scroll);
});

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