let userValue;

function select(pole){
    if (currentPole != pole) currentPole = pole;
    else currentPole = null;
    show();
}

function poleValue(userInput){
    userValue = userInput;
}

function addPole(){
    if (userValue == null){
        errorMessageDisplay(1);
        console.log(errorMessage)
        return;
    }
    if (userValue > 10){
        errorMessageDisplay(2);
        return;
    }
    numbers.push(userValue);
    if (currentPole != null) currentPole = currentPole + 1;
    show();
}

function changeValueOfPole(){
    if (userValue == null){
        errorMessageDisplay(1);
        return;
    }
    if (userValue > 10){
        errorMessageDisplay(2);
        return;
    }
    numbers[currentPole - 1] = userValue;
    show();
}

function removePole(index){
numbers.splice(index -1 , 1);
currentPole = null;
show();
}

function errorMessageDisplay(errorValue){

    if (errorValue == 1){
        errorMessage = "There is no number";
        console.log(errorMessage);
        show();
        
    }
    else if (errorValue == 2){
         errorMessage = "The number is too high";
         console.log(errorMessage);
         show();
         
    }
}