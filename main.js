let polindromInput = document.getElementById('polindrom');
let polindromOutput = document.getElementById('polindrom-output');

polindromInput.oninput = function(event) {
  let polindrom = chooseLongestPolindrom(event.target.value);

  polindromOutput.innerText = polindrom;
}
