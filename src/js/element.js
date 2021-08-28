import "../css/style.css"
import "../css/title.less"
import "../css/img.css"

const divEl = document.createElement('div');
divEl.className = "title";
divEl.innerHTML = "hello";

const divEl2 = document.createElement('div');
divEl2.className = 'content';
divEl2.innerHTML = "fuck";

const divEl3 = document.createElement('div');
divEl3.className = 'img-bg';

const imgEl = document.createElement('img');
imgEl.src = "../img/router.jpg";


document.body.appendChild(divEl);
document.body.appendChild(divEl2);
document.body.appendChild(divEl3);
document.body.appendChild(imgEl);