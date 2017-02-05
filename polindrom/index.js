function isPolindromic (string) {
  return string === reverse(string);
}

function chooseLongestPolindrom (string) {
  let wordsArray = string.split(' ');
  let polindrom = '';

  wordsArray.forEach((word, index) => {
    let subArrToCheck;
    let stringToCheck;
    let stringToReturn;

    for(let i = index; i <= wordsArray.length; i++) {
      subArrToCheck = wordsArray.slice(index - 1, i);
      stringToCheck = subArrToCheck.join('').toLowerCase();
      stringToReturn = subArrToCheck.join(' ');

      if (isPolindromic(stringToCheck) && stringToReturn.length > polindrom.length) {
        polindrom = stringToReturn;
      }
    }
  })

  return polindrom;
}

function reverse(string){
    return string.split('').reverse().join('');
}
