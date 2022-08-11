//Search-btn
var searchBtns = document.querySelectorAll(".search-btn");
var modal = document.querySelector(".search-modal");
var modalForm = document.querySelector(".search-modal__form");

function showSearch() {
    modal.classList.add("active");
}

function closeSearch() {
    modal.classList.remove("active");
}

//Click search button to show search 
for (var searchBtn of searchBtns) {
    searchBtn.addEventListener("click", showSearch);
}

//Click to hide search
modal.addEventListener("click", closeSearch);

//Stop Propagation
modalForm.addEventListener("click", function (event) {
    event.stopPropagation();
})