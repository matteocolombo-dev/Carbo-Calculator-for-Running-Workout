const main = document.querySelector("main")
const strategy = document.getElementById("carb-per-hour");
const carbPerFoods = document.getElementById("carb-per-foods");
const workoutKm = document.getElementById("workout-km");
const pace = document.getElementById("pace");
const form = document.getElementById("form");
const resultMessage = document.getElementById("result-message");
const message = document.getElementById("result");
const paceMin = document.getElementById("pace-min");
const paceSec = document.getElementById("pace-sec");
const totalTimeWorkout = document.getElementById("total-time-workout");
const totalCarbohidrates = document.getElementById("total-carbohidrates");
const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");


function isValidInput () {
    const numberRegex =  /^(?:[1-9]\d*|0)(?:[.,]\d+)?$/
    const inputs = [strategy.value, carbPerFoods.value, workoutKm.value, paceMin.value, paceSec.value];

    const isValid = inputs.every((input) => numberRegex.test(input))
    return isValid
};

// Funzione che calcola il tempo totale dell'allenamento in minuti

function totalTimeWorkoutMin () {
     const totTimeWorkoutMin = ((workoutKm.value * paceMin.value) + (workoutKm.value * paceSec.value / 60));
     return totTimeWorkoutMin;
}


function calcNumGelToBring () {

    //Tempo di allenamento stimato in ore in base al passo
    const totTimeWorkoutHour = (totalTimeWorkoutMin() / 60).toFixed(2); 

    //Numero di carboidrati assunti per tutto l'allenamento
    const totCarbWorkout = strategy.value * totTimeWorkoutHour;

    // Numero di gel, barrette o altri cibi carb da portare
    const numberOfFoods = (totCarbWorkout / carbPerFoods.value).toFixed(2);
    return numberOfFoods;    
}

function calcMinForGel () {

    //Tempo di allenamento stimato in minuti in base al passo
    const timeMin = totalTimeWorkoutMin ();

    // Ogni quanti minuti assumere il cibo?
    const minForgel = (timeMin / calcNumGelToBring ()).toFixed(2);

    return minForgel;
}

function stringTotalTimeWorout () {
    let hour = 0;

    let timeMin = totalTimeWorkoutMin()

    while (timeMin >= 60) {
        timeMin = timeMin - 60
        hour += 1;      
    }

    return `${hour} hour ${Math.round(timeMin)} min` 
}

function showResult () {
    totalTimeWorkout.textContent = ` ${stringTotalTimeWorout()}`;
    totalCarbohidrates.textContent = ` ${Math.round(strategy.value * ((totalTimeWorkoutMin()) / 60))} grams`;
    message.textContent = "";
    message.textContent = `You need to bring ${(calcNumGelToBring() - 1).toFixed(2)} and take them every ${calcMinForGel()} minutes`;
    resultMessage.style.display = "block";    
}

function manageKeyDown (e) {
    if(e.key === "Enter") resetCalc();
    window.removeEventListener("keydown", manageKeyDown)
}

form.addEventListener("submit",(e)=> {
    if (!isValidInput()) {
        alert("You should put a valid input");
        // e.preventDefault();
        return;
    };
    e.preventDefault();
    showResult();
    main.style.height = "730px";
    calculateBtn.style.display = "none";
    resetBtn.style.display = "block";

    window.addEventListener("keydown", manageKeyDown)
});


function resetCalc () {
    resetBtn.style.display = "none"
    resultMessage.style.display = "none"
    calculateBtn.style.display = "block"
    main.style.height = "600px"
    strategy.value = "";
    carbPerFoods.value = "";
    workoutKm.value = "";
    paceMin.value = "";
    paceSec.value = "";
}


//OK
resetBtn.addEventListener("click", resetCalc);






