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
function getRandomImg() {
  var num = Math.floor(Math.random()* imgName.length);
  var img = allProducts[num];
  document.getElementById('left').src = img;
  // var leftImg = getElementById('left');
  // var centerImg = getElementById('center');
  // var rightImg = getElementById('right');
  // document.write (imgStr.getElementById('left'))
  // document.getElementById('left')
}

getRandomImg();


////Event Listener

//Calling
