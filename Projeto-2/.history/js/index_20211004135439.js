window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    function moveNext () {
        alert("Next")
    }

    function movePrev () {
        alert("Prev")
    }
}

