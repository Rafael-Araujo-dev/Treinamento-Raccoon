window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item-container");
    countItems = (items.length) - 1;

    function moveNext () {
        items[0].scrollIntoView({behavior: "smooth"});
    }

    function movePrev () {
        element2.scrollIntoView({behavior: "smooth"});
    }
}

