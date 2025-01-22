import './styles.css';
import {loadHome, loadMenu, loadAbout} from './content.js'

console.log("JavaScript is running..");
console.log(loadHome);

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');
const content = document.getElementById('content');

content.appendChild(loadHome);


homeBtn.addEventListener('click', function() {
    var content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    content.appendChild(loadHome);
});

menuBtn.addEventListener('click', function() {
    var content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    content.appendChild(loadMenu);
});

aboutBtn.addEventListener('click', function() {
    var content = document.getElementById('content');
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    content.appendChild(loadAbout);
});


