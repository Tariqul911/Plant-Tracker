// const createContainer = document.getElementById('container');
// const createDiv = document.createElement('div')
// createDiv.innerHTML = `<p>I have to do it</p>`
// createContainer.appendChild(div);


const container = document.getElementById('container');

const div = document.createElement('div');
div.innerHTML = `<p>I have to do it</p>`;

container.appendChild(div);

// let array = [1,2,3,4,5,5,7];
// const filterMethod = array.filter(i => i != 7);
// console.log(filterMethod);
// array = filterMethod
// console.log('array', array);

let array = [1,2,3,4,5];
const filterMethod = array.filter(i => i != 5);
console.log(filterMethod);
array = filterMethod;
console.log(array);