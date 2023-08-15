/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const fullDayCost = 35;
const halfDayCost = 20;
let selectedDays = [];
let totalCost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const dayButtons = document.querySelectorAll(".day-selector li");

dayButtons.forEach(dayButton => {
    dayButton.addEventListener("click", () => {
        const day = dayButton.getAttribute("id");
        if (!selectedDays.includes(day)) {
            selectedDays.push(day);
            dayButton.classList.add("clicked");
            calculateTotalCost();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
    selectedDays.forEach(day => {
        document.getElementById(day).classList.remove("clicked");
    });
    selectedDays = [];
    totalCost = 0;
    calculatedCostElement.innerHTML = totalCost;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfButton = document.getElementById("half");

halfButton.addEventListener("click", () => {
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    dailyRate = halfDayCost;
    calculateTotalCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const fullButton = document.getElementById("full");

fullButton.addEventListener("click", () => {
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    dailyRate = fullDayCost;
    calculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculatedCostElement = document.getElementById("calculated-cost");

function calculateTotalCost() {
    totalCost = dailyRate * selectedDays.length;
    calculatedCostElement.innerHTML = totalCost;
}
