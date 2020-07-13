// Write your code here!

let element = document.querySelector('main');
element.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';

var text = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(text);