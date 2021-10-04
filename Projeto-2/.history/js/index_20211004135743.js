window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item");
    console.log(items.length);

    function moveNext () {
        alert("Next")
    }

    function movePrev () {
        alert("Prev")
    }
}

