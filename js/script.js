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

const classOfSelect = document.querySelector(".select");

const renderSelectWithMovies = () => {
    const fragment = new DocumentFragment();
    moviesData.forEach((movies) =>  {
        const option = document.createElement('option');
        option.append(movies.name);
        fragment.append(option);
    });
    return fragment;
}

classOfSelect.append(renderSelectWithMovies());

const changeStyleOfPlace = (getElementFromArray) => {

    if (getElementFromArray.currentTarget.className == "row__place") {
        getElementFromArray.currentTarget.className = "row__selected";
    }
    else {
        getElementFromArray.currentTarget.className = "row__place";
    }
}


const getPlace = document.querySelectorAll(".row__place");
getPlace.forEach((getElementFromArray) => getElementFromArray.addEventListener("click", changeStyleOfPlace));
