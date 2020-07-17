
// *for function ( feet To Mile)

function feetToMile(feet) {
    if (feet < 0) {
        var notFound = " warning ! feet can't  be negative";
        return notFound;
    }
    //we know that 1 mile = 5280feet
    else {
        var mile = feet / 5280;
        return mile;
    }


}




//** for Wood calculation 

function woodcalculator(chair, table, bed) {

    if (chair < 0) {
        return "Warning ! there  will not no negative number of chair    ";
    }
    else if (table < 0) {
        return " warning ! there  will not no negative number of table ";
    }
    else if (bed < 0) {
        return " warning ! there  will not no negative number of Bed "
    }

    else {
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        var totalWood = chairCount + tableCount + bedCount;
    }

    return totalWood;
}



//*for brickCalculator

function brickCalculator(numberOfFloor){
    if (numberOfFloor <= 0){
        var warning = " Warning ! there is no zero or negative floor";
        return warning;
    }
else{
if (numberOfFloor <= 10){
    firstTenFloor = numberOfFloor;
    return firstTenFloor * 15 * 1000;
}
else if ((numberOfFloor > 10) && (numberOfFloor <= 20)){
    firstTenFloor = 10;
    tenToTwentyFloor = numberOfFloor- firstTenFloor;
    return ((firstTenFloor * 15 *1000) + ( tenToTwentyFloor * 12 * 1000));
}
else if(numberOfFloor > 20){
    firstTenFloor = 10;
    secondTenFloor = 10;
    moreThanTwenty = numberOfFloor - 20;
    return ((firstTenFloor * 15 * 1000) + (secondTenFloor *12 *1000) + (moreThanTwenty * 10 * 1000));
}

}

}




//* for find shortest one
function findShortest(arr) {
    let shortest = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length == 0) {
            return " null words can't be a short name "
        }
        else if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
}
