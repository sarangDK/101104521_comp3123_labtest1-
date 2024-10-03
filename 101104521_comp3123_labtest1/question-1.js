// lab test 1 - question 1
function lowerCaseWords(array) {
  return new Promise((resolve, reject) => { 
    if (!Array.isArray(array)) {
      reject('it is not an array');
    }

    else 
    {
      let filteredArray = array.filter((element) => typeof element === 'string');
      let lowerCaseArray = filteredArray.map((element) => element.toLowerCase());
      resolve(lowerCaseArray);
    }
  }); 
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then(result => console.log(result)).catch(error => console.log(error));