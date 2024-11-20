var cookies = 0;
var cursor = 1;

var pointers = 0;
var pointerCostVar = 10;

var children = 0;
var childrenCostVar = 200;

const counter = document.getElementById("counter");

const pointerCounter = document.getElementById("pointerCount");
const pointerCost = document.getElementById("pointerCost");

const childCounter = document.getElementById("childCount");
const childCost = document.getElementById("childCost");



function clickMe() {
    cookies += cursor;
    updatePage();
}

function pointerBuy() {
    if(cookies >= pointerCostVar) {
        cookies -= pointerCostVar;
        pointers++;
        pointerCostVar *= 1.2;
        pointerCostVar = Math.round(pointerCostVar);
    }
    updatePage();
}

function childBuy() {
    if(cookies >= childrenCostVar) {
        cookies -= childrenCostVar;
        children++;
        childrenCostVar *= 1.2;
        childrenCostVar = Math.round(childrenCostVar);
    }
    updatePage();
}

function buyAll() {
    while(cookies >= childrenCostVar) {
        childBuy();
    }
    while(cookies >= pointerCostVar) {
        pointerBuy();
    }
}






function updatePage(){
    counter.innerHTML = Math.round(cookies);

    pointerCounter.innerHTML = "Pointers: " + pointers;
    pointerCost.innerHTML = "Cost: " + pointerCostVar;

    childCounter.innerHTML = "Children: " + children;
    childCost.innerHTML = "Cost: " + childrenCostVar;
}

function cookieUpdate() {
    cookies += pointers / 10;
    cookies += children;
    updatePage();
    setTimeout(cookieUpdate, 100);
}

cookieUpdate();