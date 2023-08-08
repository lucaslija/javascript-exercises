const container = document.querySelector('#container');

// Create a <p> with red text
const p = document.createElement('p');
p.classList.add('red');
p.textContent = "Hey, I'm red!";
p.style.color = 'red';

// Create an <h3> with blue text
const h3 = document.createElement('h3');
h3.classList.add('blue');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

// A <div> w/ black border and pink background...
const div = document.createElement('div');
div.classList.add('pink-background', 'black-border');
div.style.backgroundColor = 'pink';
div.style.border = '2px solid black';
// ...with the following elements inside it:
// another <h1>
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);
// a <p>
const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
div.appendChild(p2);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

// Button Stuff
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', (e) => {
    alert("Hello World");
    e.target.style.background = 'blue';
});
