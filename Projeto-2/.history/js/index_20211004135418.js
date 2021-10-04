window.onload = function (){
    var el = document.getElementById("btn-prev");
    el.addEventListener("click", movePrev);

    function moveNext () {
        alert("Next")
    }

    function movePrev () {
        alert("Prev")
    }
}

