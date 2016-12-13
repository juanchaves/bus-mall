'use strict'

//Global variables & array here:
var imgContainer = document.getElementById('image_container');
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');
var previousArray = [];
var currentArray = [];
var allProducts =[];
var imgName = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

//Constructor

function Product(imgName) {
  this.imgName = imgName,
  this.imgPath = 'img/' + imgName + '.jpg';
  this.imgApperence = 0;
  this.oftenClicked = 0;
  allProducts.push(this);
}


for (var i = 0; i < imgName.length; i++) {
  new Product(imgName[i]);
}
//Functions

function getRandomNum() {
  return Math.floor(Math.random() * imgName.length);
}
currentArray.push(getRandomNum());
currentArray.push(getRandomNum());
console.log(currentArray);

// if

function displayLeft() {
  leftImg.src = allProducts[currentArray[0]].imgPath;
}

displayLeft();

///Event Handler
////Random Image Generator


////Event Listener

//Calling
