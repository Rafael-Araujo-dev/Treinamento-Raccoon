const carousel = document.getElementById('#items');

window.addEventListener("scrollX", (event) => {
   let scroll = this.scrollY;
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