/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const halfRate = 20;
const fullRate = 35;

const fullBtn = document.getElementById("full");
const halfBtn = document.getElementById("half");
const clearBtn = document.getElementById("clear-button");
const dayBtn = document.querySelectorAll(".day-selector .blue-hover");

let costTxt = document.getElementById("calculated-cost");

let numDays = document.querySelectorAll(".day-selector .blue-hover.clicked").length;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// Select all buttons for days of the week
dayBtn.forEach(button => {
    button.addEventListener("click", function() {
        if (this.classList.contains("clicked")) {
            this.classList.remove("clicked");
        } else {
            this.classList.add("clicked");
        }
        numDays = document.querySelectorAll(".day-selector .blue-hover.clicked").length;
        calculate(numDays);
    });
});
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    dayBtn.forEach(button => {
            if (button.classList.contains("clicked")) {
                button.classList.remove("clicked");
            }
        });
    numDays = 0;
    costTxt.innerHTML = 0;
}
clearBtn.addEventListener('click',clearDays);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function changeHalf() {
    halfBtn.classList.add("clicked");
    fullBtn.classList.remove("clicked");
    calculate(numDays);
}
halfBtn.addEventListener('click',changeHalf);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function changeFull() {
    fullBtn.classList.add("clicked");
    halfBtn.classList.remove("clicked");
    calculate(numDays);
}
fullBtn.addEventListener('click',changeFull);
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(numDays) {
    if(fullBtn.classList.contains("clicked")) {
        let totalCost = numDays * fullRate;
        costTxt.innerHTML = totalCost;
    } else {
        let totalCost = numDays * halfRate;
        costTxt.innerHTML = totalCost;
    }
}