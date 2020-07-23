// Write your code here!


document.body.removeChild(document.querySelector('main'))


let newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.innerHTML = 'YOUR-NAME is the champion';
document.head.appendChild(newHeader);