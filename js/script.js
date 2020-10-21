const dataSurvey = data; // loading all survey data and storing it in a variable.
// console.log(dataSurvey);


let columnName = "aantalGlazenWaterPerDag";
let allAnswersInColumn = getData(dataSurvey, columnName);
let cleanDataOfEmptySlots = removeEmptySlots(allAnswersInColumn)
let cleanData = stringToNumbers(cleanDataOfEmptySlots);
// console.log(allAnswersInColumn);
console.log(cleanData);


// returns all data for a specific column
function getData(answers, question) {
    let answerData = [];
    for (answer of answers) {
        answerData.push(answer[question]);
    }
    return answerData; // Array with all the data in the specific column
};

// converts all string numbers to numbers (integers)
function stringToNumbers(arr) {
    let newCleanData = arr.map(x => +x);
    return newCleanData;
}
// RESOURCE: https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers

// removes all empty slots
function removeEmptySlots(arr) {
    let cleanData = arr.filter(function (cleanData) {
        // return cleanData != "" || 0;  // also would remove the data that is zero.
        return cleanData != "";
    })
    return cleanData;
}