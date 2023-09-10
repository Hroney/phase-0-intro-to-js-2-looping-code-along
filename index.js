function writeCards(stringArray, eventName) {
    const arrayToReturn = [];
    for (let i = 0; i < stringArray.length; i++) {
        arrayToReturn[i] = `Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`;
    }
    return arrayToReturn;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}