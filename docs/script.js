const strategy = document.getElementById("carb-per-hour");
const carbPerFoods = document.getElementById("carb-per-foods");
const workoutKm = document.getElementById("workout-km");
const pace = document.getElementById("pace");
const form = document.getElementById("form");
const resultMessage = document.getElementById("result-message");
const message = document.getElementById("result");
const paceMin = document.getElementById("pace-min");
const paceSec = document.getElementById("pace-sec");



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

    // Ogni quanti minuti assumere il cibo?
    const min = (totTimeWorkoutMin / calcNumGelToBring ()).toFixed(2);

    return min;
}

function showResult () {
    message.textContent = "";
    message.textContent = `You need to bring ${(calcNumGelToBring() - 1).toFixed(2)} and take them every ${calcMin()} minutes`;
    resultMessage.style.display = "block";    
}

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    showResult();
    strategy.value= "";
    carbPerFoods.value="";
    workoutKm.value = "";
    paceMin.value = "";
    paceSec.value = "";
});




