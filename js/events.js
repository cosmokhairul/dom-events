function makeRed() {
    document.body.style.backgroundColor = 'red';
}
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
//anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle by using add eventlistener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//add eventlistener - 2nd way
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

