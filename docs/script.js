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

function isValidInput (input) {

    const regex = /\d+e\d+/i;

    if (input < 0 || regex.test(input)) 
    return true;
};


function calcNumGelToBring () {

    //Tempo di allenamento stimato in ore in base al passo
    const totTimeWorkoutHour = (((workoutKm.value * paceMin.value) + (workoutKm.value * paceSec.value / 60)) / 60).toFixed(2); 
    console.log(totTimeWorkoutHour)

    //Numero di carboidrati assunti per tutto l'allenamento
    const totCarbWorkout = strategy.value * totTimeWorkoutHour;
    console.log(totCarbWorkout);

    // Numero di gel, barrette o altri cibi carb da portare
    const numberFoods = (totCarbWorkout / carbPerFoods.value).toFixed(2);
    console.log(numberFoods);

    return numberFoods;    
}

function calcMin () {

    //Tempo di allenamento stimato in minuti in base al passo
    const totTimeWorkoutMin = ((workoutKm.value * paceMin.value) + (workoutKm.value * paceSec.value / 60));
    console.log("Tempo totale di allenamento:",totTimeWorkoutMin)

    // Ogni quanti minuti assumere il cibo?
    const min = (totTimeWorkoutMin / calcNumGelToBring ()).toFixed(2);

    return min;
}

function calcTotalTimeWorkout () {
    let hour = 0;

    let totalTimeWorkoutMin = ((workoutKm.value * paceMin.value) + (workoutKm.value * paceSec.value / 60))

    while (totalTimeWorkoutMin >= 60) {
        totalTimeWorkoutMin = totalTimeWorkoutMin - 60
        hour += 1;
        
    }

    return `${hour} hour ${Math.round(totalTimeWorkoutMin)} min`
    
}

function showResult () {
    totalTimeWorkout.textContent = ` ${calcTotalTimeWorkout ()}`;
    totalCarbohidrates.textContent = ` ${Math.round(strategy.value * (((workoutKm.value * paceMin.value) + (workoutKm.value * paceSec.value / 60)) / 60))} grams`;
    message.textContent = "";
    message.textContent = `You need to bring ${(calcNumGelToBring() - 1).toFixed(2)} and take them every ${calcMin()} minutes`;
    resultMessage.style.display = "block";    
}

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    showResult();
    // strategy.value= "";
    // carbPerFoods.value="";
    // workoutKm.value = "";
    // paceMin.value = "";
    // paceSec.value = "";
    main.style.height = "730px"
});




