const carousel = document.getElementById('#items');

window.addEventListener("scroll", (event) => {
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