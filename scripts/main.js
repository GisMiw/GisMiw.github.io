
document.querySelector('html').onclick = function(){
	alert('别戳我，我怕疼。')；
}
let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/h082801.png'){
		myImage.setAttribute('src', 'images/h082803.png');
	} else {
		myImage.setAttribute('src', 'images/h082801.png');
	}
}

function setHeading(name){
	let myHeading = document.querySelector('h1')
	myHeading.textContent = '葵花8号气溶胶,' + name + '!';
}

function setUsername(){
	let myName = prompt('请输入你的名字')；
	localStorage.setItem('name', myName);
	setHeading(myName);
}

let storedName = localStorage.getItem('name')
if (!storedName){
	setUserName();
}else{
	setHeading(storedName);
}
let myButton = document.querySelector('button');
myButton.onclick = setUserName;


