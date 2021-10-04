window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item-container");
    countItems = (items.length) - 1;

    let slide = 0;

    function moveNext () {
        console.log(slide);
        if (slide < countItems) {
            slide++;
            items[slide].scrollIntoView({behavior: "smooth"});
            console.log("slide: "+slide);
            console.log("countItems: " + countItems);
            if (slide + 1 > countItems) {
                btnNext.style.visibility = "hidden";
            } if (slide + 1 < countItems){
                btnNext.style.visibility = "visible";
            }
        }
    }

    function movePrev () {
        if (slide > 0){
            slide--;
            items[slide].scrollIntoView({behavior: "smooth"});
        } else {
            slide = 0;
        }
    }
}

