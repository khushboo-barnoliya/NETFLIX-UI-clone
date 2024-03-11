
// learn more collapse starts

let learnMore = document.getElementById('learnMore');
let collapseDown = document.getElementById('collapseDown');

learnMore.addEventListener('click', function() {
    collapseDown.style.visibility = "visible";
    learnMore.style.visibility = "hidden";
    return true;
})

// learn more collapse ends


// language btn st

let langBtn = document.getElementById('langBtn2');
let langDrop = document.getElementById('langDrop2');
let langSpan = document.getElementById('langSpan2');
let langList = document.querySelectorAll('.langList2');

langBtn.addEventListener('click', () => {
    langDrop.classList.toggle("langDropShow2");
})

langList.forEach(langList => langList.addEventListener('click', langSelectHandler));

function langSelectHandler(e){
    langSpan.innerText = e.target.innerText;
    langList.forEach((langList)=> langList.classList.remove("langActive"));

    this.classList.add("langActive");
    langDrop.classList.remove("langDropShow2");
}

// language btn en