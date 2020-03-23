"use strict";

const place = document.querySelectorAll(".row__place");
const moviesOptions = document.querySelectorAll("select__option");
const moviesSelect = document.querySelector(".select");

const moviesData = [
    {
        name: "Avengers: Final (10$)",
        price: 10
    },
    {
        name: "Joker (12$)",
        price: 12
    },
    {
        name: "John Wick 3 (8$)",
        price: 8
    },
    {
        name: "The Lion King (9$)",
        price: 9
    }
]

let priceTickets = moviesData[0].price;

const renderSelectWithMovies = () => {
    const fragment = new DocumentFragment();
    moviesData.forEach((movie) =>  {
        const option = document.createElement('option');
        option.className = "select__option";
        option.textContent = movie.name;
        fragment.append(option);
    });
    return fragment;
}

const createOption = () => {
    moviesSelect.append(renderSelectWithMovies());
}

const changeStyleOfPlace = (evt) => {
    evt.currentTarget.className == "row__place" ? evt.currentTarget.className = "row__selected" : evt.currentTarget.className = "row__place";
}

const addClickListenersToPlaces = () => {
    place.forEach((evt) => evt.addEventListener("click", changeStyleOfPlace));
}

document.querySelector(".select").addEventListener('change', function() {
    const selectedOptionIndex = [moviesOptions].findIndex(option => option.selected);
    console.log(selectedOptionIndex);
});


createOption();
addClickListenersToPlaces();