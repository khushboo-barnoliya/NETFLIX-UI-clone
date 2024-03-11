
var searchBar = document.getElementById("searchBar");
var fixedSearchBar = document.getElementById("fixedSearcBar");

var formSearchBar = document.getElementById('formSearchBar');
var fixed = formSearchBar.offsetTop;

console.log(fixed)

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > fixed){
        fixedSearchBar.classList.add("showSearchBar");
    }
    else{
        fixedSearchBar.classList.remove("showSearchBar");
    }
})