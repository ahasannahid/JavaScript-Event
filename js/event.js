console.log('this is separate js file');

// system 1( directly set on the html element)
/*
    <h1 title="home" onclick="console.log('this is h1')">DOM Speial Event</h1>
    <button onclick="console.log(7)">Click Me</button>
    <button onclick="console.log('you have to go')">Another Button</button>
 */

// system 2 add onclice function()
// most important
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// system 3 add onclick function
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// system 3.5 add onclice function(using sometime)
const makePurpleButton = document.getElementById('make-Purple');
// console.log(makeBlueButton);
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
    // here function name is optional
};

// system 4

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4.5
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function greenButton(){
    document.body.style.backgroundColor = 'green';
    // funtion name optional
});

// option 5(final version) maximum time event handle er jonne use korbo

// document.getElementById('make-tomato').addEventListener('click', function(){});
document.getElementById('make-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
});