const getPlace = document.querySelectorAll(".row__place");
let priceOfMovie = 0;

document.querySelector(".select").addEventListener('change', function() {
    let valueOfSelect = Number(this.value);
});

document.addEventListener('DOMContentLoaded', () => {
    let valueOfSelect = Number(document.querySelector(".select").value);
});

const getPriceOfSelect = (priceOfMovie) => {
    
    switch (valueOfSelect) {
        case 10:
            priceOfMovie = 10;
            return priceOfMovie;
            break;
        case 12:
            priceOfMovie = 12;
            return priceOfMovie;
            break;
        case 8:
            priceOfMovie = 8;
            return priceOfMovie;
            break;
        case 9:
            priceOfMovie = 9;
            return priceOfMovie;
            break;
        default:
            return alert( "Нет таких значений" );
    }
} 

const changeStyleOfPlace = (getElementFromArray, priceOfMovie) => {

    if (getElementFromArray.currentTarget.className == "row__place") {
        getElementFromArray.currentTarget.className = "row__selected";
        document.querySelector(".text__total").innerHTML += priceOfMovie;
    }
    else {
        getElementFromArray.currentTarget.className = "row__place";
    }
}

getPlace.forEach((getElementFromArray) => getElementFromArray.addEventListener("click", changeStyleOfPlace));