let userValue;
function isSelected(pole){
    if (currentPole != pole) currentPole = pole;
    else currentPole = null;
    show();
}

function poleValue(userInput){
    userValue = userInput;
}

function addPole(){
    if (userValue == null) return alert("There is no number");
    else if (userValue > 10) return alert("The number is too high");
    numbers.push(userValue);
    if (currentPole != "ingen") currentPole = currentPole + 1;
    userValue = null;
    show();
}

function changeValueOfPole(){
    if (userValue == null) return alert("There is no number");
    else if (userValue > 10) return alert("The number is too high");
    numbers[currentPole - 1] = userValue;
    userValue = null;
    show();
}

function removePole(index){
numbers.splice(index -1 , 1);
currentPole = null;
show();
}