window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    function moveNext () {
        alert("Next")
    }

    function movePrev () {
        alert("Prev")
    }
}

