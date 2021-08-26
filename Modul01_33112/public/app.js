const calculateBtn = document.querySelector('ion-button');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');

const calculateBMI = () => {
    const enteredHeight = +heightInput.value / 100;
    const enteredWeight = +weightInput.value;

    var bmi = enteredWeight / (enteredHeight * enteredHeight);
    var result;

    if (bmi < 18.5) {
        result = "Kurus";
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        result = "Normal";
    }
    else if (bmi > 25 && bmi < 29.9) {
        result = "Gemuk";
    }
    else if (bmi > 29.9) {
        result = "Obesitas";
    }
    else {
        bmi = "Error Result";
        result = "Error Status";
    }

    console.log(bmi);
    console.log(result);
    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("result").innerHTML = result;
};

calculateBtn.addEventListener('click', calculateBMI);
