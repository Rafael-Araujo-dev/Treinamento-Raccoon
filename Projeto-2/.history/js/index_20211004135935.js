window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item");
    countItems = (items.length) - 1;


    var element = items[2];

    element.scrollIntoView();

    function moveNext () {
        alert("Next");
        element.scrollIntoView();
    }

    function movePrev () {
        alert("Prev")
    }
}

