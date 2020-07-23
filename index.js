let element = document.querySelector('main#main');
element.remove();

let newHeader = document.createElement('h1')
newHeader.id = "victory" 

newHeader.innerHTML = "Candace is the champion"

document.body.appendChild(newHeader)

