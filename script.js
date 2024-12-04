var cookies = 1000;
var cursor = 1;

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

const buyAllButton = document.getElementById("buyAllButton");
buyAllButton.style.display = "none";

const clickerUpgradeButton1 = document.getElementById("clickerBuff");
const clickerUpgradeButton2 = document.getElementById("buyAll");

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


function clickerUpgrade1() {
    if(cookies >= 500) {   
        clickerUpgradeButton1.style.display = "none";
        cookies -= 500;
        cursor = 10;
    }
}

function clickerUpgrade2() {
    if(cookies >= 1000) {
        clickerUpgradeButton2.style.display = "none";
        cookies -= 1000;
        buyAllButton.style.display = "contents";
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
    cookies += pointers / 100;
    cookies += children / 10;
    updatePage();
    setTimeout(cookieUpdate, 10);
}


cookieUpdate();