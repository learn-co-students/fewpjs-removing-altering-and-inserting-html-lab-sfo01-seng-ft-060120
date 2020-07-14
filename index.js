// Write your code here!

main.remove();

let newHeader = document.createElement('h1');

document.body.appendChild(newHeader);

newHeader.id="victory";

const name = "Turd Burgaler";

// let newHeader = document.querySelector('h1#victory'); 
// newHeader.innerHTML = `${name} is the champion`
 
let newText = document.querySelector('h1#victory');
newText.innerHTML = `${name} is the champion`




