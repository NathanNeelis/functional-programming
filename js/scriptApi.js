const endpoint = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'; // welke dataset?
const selectedColumn = 'areaid'; // column of choice

getData(endpoint)
    .then(rdwData => {
        console.log('all data:', rdwData);
        console.log('first element:', rdwData[0]);
        const areaIdArray = filterData(rdwData, selectedColumn);
        console.log(areaIdArray);
    })

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// returns an array of all data in a specific column
function filterData(dataArray, column) {
    return dataArray.map(result => result[column]);
}

// Returns all unique values in an array
function listUnique(dataArray) {
    // code to find the unique values
    let uniqueArray = [];
    dataArray.map(item => {
        if (uniqueArray.indexOf == -1) // If items does not excist yet in the array, then add it to the array.
        {
            uniqueArray.push(item);
        }
    })
    return uniqueArray;
}
// RESOURCE: code by Laurens - livecoding API


// compares two arrays and returns the values  that are present in array1 but not in array 2.
function compareArray(array1, array2) {
    // code below...
    return valuesOnlyPresentInArray1
}

// Returns the number of times a value is present in an Array
function countValuesInArray(valueArray, specificValue) {
    // code below...
    let count = 0;
    valueArray.forEach(item => {
        if (item == specificValue) {
            count += 1
        }
    })
    return count

    //to do: 
    // search in all items and count if there are more.
}