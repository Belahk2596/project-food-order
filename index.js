const pepperoniRegular = document.getElementById("pepperoni-regular");
const pepperoniLarge = document.getElementById("pepperoni-large");

const meatloversRegular = document.getElementById("meatlovers-regular");
const meatloversLarge = document.getElementById("meatlovers-large");

const cheeseRegular = document.getElementById("cheese-regular");
const cheeseLarge = document.getElementById("cheese-large");

let totalPrice = document.getElementById("total-price");
let totalCounter = 0;

const totalString = 'Total Price: $'

pepperoniRegular.addEventListener("click", function () {
    totalCounter = totalCounter + 12;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

pepperoniLarge.addEventListener("click", function () {
    totalCounter = totalCounter + 16;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

meatloversRegular.addEventListener("click", function () {
    totalCounter = totalCounter + 12;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

meatloversLarge.addEventListener("click", function () {
    totalCounter = totalCounter + 12;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

cheeseRegular.addEventListener("click", function () {
    totalCounter = totalCounter + 12;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});

cheeseLarge.addEventListener("click", function () {
    totalCounter = totalCounter + 12;
    totalPrice.innerText = `${totalString}${totalCounter}.00`;
});
