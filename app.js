'use strict'

//Global variables & array here:
var allProducts =[];
var imgName = ['bag','bannana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

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
///Event Handler
////Random Image Generator
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');

function getRandomImg() {
  for (var i = 0; i < 3; i++) {
    Math.floor(Math.random()* imgName.length);
    return
  }
  var img = allProducts[num].imgPath;
  leftImg.src = img;
  centerImg.src = img;
  rightImg.src =img;
}

getRandomImg();




////Event Listener

//Calling
