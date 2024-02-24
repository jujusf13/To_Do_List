const submitButton = document.querySelector(".submit"); //Gets first button
const ul = document.querySelector("ul"); //Gets first button
const searchBox = document.querySelector('.search-box');

const clearAll = document.querySelector(".clear-all");
let todoListLength = document.querySelectorAll(".to-do-list ul li").length;
console.log(length);

/*
searchBox.addEventListener("input", (event) =>{
    console.log(searchBox.value);
});
*/

submitButton.addEventListener("click", (event) => {

    elem = document.createElement("li");
    elem.textContent = searchBox.value;
    text = elem.textContent.trim();

    if (text !== ""){
        ul.appendChild(elem);

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        elem.insertAdjacentElement("beforeend",removeButton);
        removeButton.setAttribute("class", "remove-button");

        removeButton.addEventListener('click', function() {
            listItem.remove();
        });
    }
        
    /* } else {
        alert("Blank space was used");
    } */

    searchBox.value =  "";

});

ul.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('remove-button')) {
        const listItem = clickedElement.closest('li');
        if (listItem) {
            listItem.remove();
        }
    }
});

clearAll.addEventListener("click", (event) => {
    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }
    searchBox.value =  "";
}); 



//Use local storage next
