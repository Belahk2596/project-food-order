const pepperoniRegular = document.getElementById("pepperoni-regular");
const pepperoniLarge = document.getElementById("pepperoni-large");

const meatloversRegular = document.getElementById("meatlovers-regular");
const meatloversLarge = document.getElementById("meatlovers-large");

const cheeseRegular = document.getElementById("cheese-regular");
const cheeseLarge = document.getElementById("cheese-large");

const regularPizzaSize = 12;
const largePizzaSize = 16;

let totalPrice = document.getElementById("total-price");
let totalCounter = 0;

const totalString = 'Total Price: $'

pepperoniRegular.addEventListener("click", function () {
    totalCounter = totalCounter + regularPizzaSize;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

pepperoniLarge.addEventListener("click", function () {
    totalCounter = totalCounter + largePizzaSize;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

meatloversRegular.addEventListener("click", function () {
    totalCounter = totalCounter + regularPizzaSize;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

meatloversLarge.addEventListener("click", function () {
    totalCounter = totalCounter + largePizzaSize;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

cheeseRegular.addEventListener("click", function () {
    totalCounter = totalCounter + regularPizzaSize;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

cheeseLarge.addEventListener("click", function () {
    totalCounter = totalCounter + largePizzaSize;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});
    