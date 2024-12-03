var cookies = 0;
var cursor = 1;

var indexUI = 0;

var pointers = 0;
var pointerCostVar = 10;

var children = 0;
var childrenCostVar = 200;

const counter = document.getElementById("counter");

const shopUI = document.getElementById("shopUI");
const upgradeUI = document.getElementById("upgradeUI");

const pointerCounter = document.getElementById("pointerCount");
const pointerCost = document.getElementById("pointerCost");

const childCounter = document.getElementById("childCount");
const childCost = document.getElementById("childCost");


function shop() {
    indexUI = 0;
    updateUI();
}

function upgrades() {
    indexUI = 1;
    updateUI();
}

function updateUI() {
    if(indexUI == 0) {
        shopUI.display = "visible";
        upgradeUI.style.display = "none";
    }
    if(indexUI == 1) {
        shopUI.display = "none";
        upgradeUI.style.display = "visible";
    }
}

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