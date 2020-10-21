const dataSurvey = data; // loading all survey data and storing it in a variable.
// console.log(dataSurvey);

// Column Aantal glazen water per dag
let columnName = "aantalGlazenWaterPerDag";
let allAnswersInColumn = getData(dataSurvey, columnName);
let cleanDataOfEmptySlots = removeEmptySlots(allAnswersInColumn)
let cleanData = stringToNumbers(cleanDataOfEmptySlots);
// console.log(allAnswersInColumn);
console.log(cleanData);

// Column kleur ogen
let secondColumnName = "oogKleur";
let allEyeColorData = getData(dataSurvey, secondColumnName);
let eyeColorDataLowerCase = toLowerCase(allEyeColorData);
let eyeHexColors = replaceColorNamesToHexcolors(eyeColorDataLowerCase);
let eyeHexColorSpaces = removeSpaces(eyeHexColors);

// to do
// * Check and put een # voor kleurcodes
// * Spatie na de # (removes " "??) DONE
// * RGB naar hex?
// * Vreemde eendjes in de data..? What to do?

console.log(eyeHexColorSpaces);


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

// All data to lowercase
function toLowerCase(arr) {
    let newCleanData = arr.map(x => x.toLowerCase());
    return newCleanData;
}


function replaceColorNamesToHexcolors(arr) {
    var cleanData = arr.map(
        x => {
            return x
                .replace(/blauw/, '#0000FF')
                .replace(/blue/, '#0000FF')
                .replace(/groen/, '#008000')
                .replace(/green/, '#008000')
                .replace(/bruin/, '#A52A2A')
                .replace(/brown/, '#A52A2A')
                .replace(/rood/, '#FF0000')
                .replace(/red/, '#FF0000')
                .replace(/roze/, '#FFC0CB')
                .replace(/pink/, '#FFC0CB')
                .replace(/oranje/, '#FFA500')
                .replace(/orange/, '#FFA500')
                .replace(/geel/, '#FFFF00')
                .replace(/yellow/, '#FFFF00')
                .replace(/paars/, '#800080')
                .replace(/purple/, '#800080')
                .replace(/grijs/, '#808080')
                .replace(/gray/, '#808080')
                .replace(/wit/, '#FFFFFF')
                .replace(/white/, '#FFFFFF');

        });

    // RESOURCE: https://stackoverflow.com/questions/953311/replace-string-in-javascript-array
    // RESOURCE: https://stackoverflow.com/questions/7990879/how-to-combine-str-replace-expressions-in-javascript
    // RESOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // RESOURCE: Color data https://htmlcolorcodes.com/color-names/


    return cleanData; // Array with colornames converted to hex colors.
}

function removeSpaces(arr) {
    var cleanData = arr.map(
        x => {
            return x.replace(/ /, '')
        });
    return cleanData; // Array without spaces in strings.
}

// checks if there is a # infront of the code
// function hexCheck(arr) {
//     if

//     var cleanData = arr.map(
//         x => {
//             return x
//                 .replace(/#/, '#')

//         });

//     return cleanData; // Array with colornames converted to hex colors.

//     // if (arr.indexOf('#') == -1){
//     //   var cleanData = arr.map(
//     //     x => {
//     //         return x
//     //             .replace(/blauw/, '#0000FF')
//     //     }
//     // }


// }