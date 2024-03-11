

let langBtn = document.getElementById('langBtn');
let langDrop = document.getElementById('langDrop');
let langSpan = document.getElementById('langSpan');
let langList = document.querySelectorAll('.langList');

langBtn.addEventListener('click', () => {
    langDrop.classList.toggle("langDropShow");
})

langList.forEach(langList => langList.addEventListener('click', langSelectHandler));

function langSelectHandler(e){
    langSpan.innerText = e.target.innerText;
    langList.forEach((langList)=> langList.classList.remove("langActive"));

    this.classList.add("langActive");
    langDrop.classList.remove("langDropShow");
}




// accordion button starts

const accorDion = document.getElementsByClassName('accordionMain');

for(var i = 0; i < accorDion.length; i++){
    accorDion[i].addEventListener('click', function(){
        this.classList.toggle('accoShow');
    });
}



let langBtn3 = document.getElementById('langBtn3');
let langDrop3 = document.getElementById('langDrop3');
let langSpan3 = document.getElementById('langSpan3');
let langList3 = document.querySelectorAll('.langList3');

langBtn3.addEventListener('click', () => {
    langDrop3.classList.toggle("langDropShow3");
})

langList3.forEach(langList3 => langList3.addEventListener('click', langSelectHandler));

function langSelectHandler(elem){
    langSpan3.innerText = elem.target.innerText;
    langList3.forEach((langList3)=> langList3.classList.remove("langActive3"));

    this.classList.add("langActive3");
    langDrop3.classList.remove("langDropShow3");
}


// accordion button ends
