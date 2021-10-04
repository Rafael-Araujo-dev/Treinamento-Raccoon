window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item");
    countItems = (items.length) - 1;
    alert(countItems)

    function moveNext () {
        alert("Next")
    }

    function movePrev () {
        alert("Prev")
    }
}

