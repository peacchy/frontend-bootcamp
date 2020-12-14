const match = 'a';

function displayMatches() {
  const email = document.getElementById('email');
  const text = email.value;
  console.log(text);
  let matches = 0;
  for (let letter of text) {
    if (letter === match) {
      matches++;
    }
  }
  console.log(matches);
   document.querySelector('.submit').value = matches + ' matches';
}

window.onload = function() {
  console.log('loaded!');
};
window.onclick = function() {
  console.log('clicked!');
};

document.querySelector('.submit').onclick = displayMatches;