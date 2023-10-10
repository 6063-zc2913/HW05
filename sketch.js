let dataObject;
let data;

let priceMin;
let priceMax;
let pointsMin;
let pointsMax;


function preload() {
  dataObject = loadJSON("Winemag.json");
}
data[i]["price"];
data[i]["points"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  data = Object.values(dataObject);

  for (let i = 0; i < data.length; i++) {
    let points = data[i].points;
    let price = data[i].price;

    priceMin = min(priceMin, price);
    priceMax = max(priceMax, price);
    pointsMin = min(pointsMin, points);
    pointsMax = max(pointsMax, points);
  }
}

function draw() {
  background(0);
  fill(191,56,56,80);

  stroke("lightred");

  // draw a visualization relating price to points
  for (let i = 0; i < data.length; i++) {
    let x = map(data[i].points, pointsMin, pointsMax, 0, width);
    let d = map(data[i].price, priceMin, priceMax, 50, width);   
    ellipse(x, height/2 , d, d);
  }
  noLoop();
}