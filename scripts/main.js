// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector('html').onclick = function () {
//     alert('别戳我，我怕疼');
// }
// document.querySelector('html').addEventListener('click', () => {
//     alert('戳我，我怕疼');
// })
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let myScr = myImage.getAttribute('src');
    if (myScr === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 牛逼克拉斯 ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 牛逼克拉斯 ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}