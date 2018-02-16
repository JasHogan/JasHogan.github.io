var myImage = document.querySelector('img');

myImage.onclick = function () {
    var myScr = myImage.getAttribute('src');
    if (myScr === 'images/shaceship-cynthia-westcott-space01.png') {
        myImage.setAttribute ('src', 'images/shaceship-cynthia-westcott-space02.png');
    } else {
        myImage.setAttribute('src', 'images/shaceship-cynthia-westcott-space01.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome aspiring Space Farmer, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Back for more , ' + storedName + '?';
}

myButton.onclick = function() {
    setUserName();
}
