var cookies = 0;
var pointers = 0;
var pointerCostVar = 10;
const counter = document.getElementById("counter");
const pointerCounter = document.getElementById("pointerCount");
const pointerCost = document.getElementById("pointerCost");
function clickMe() {
    cookies++;
    updatePage();
}

function itemBuy() {
    if(cookies >= pointerCostVar) {
        cookies -= pointerCostVar;
        pointers++;
        pointerCostVar *= 1.2;
        pointerCostVar = Math.round(pointerCostVar);
    }
    updatePage();
}

function pointerUpdate() {
    cookies += pointers;
    updatePage();
    setTimeout(pointerUpdate, 1000);
}

function updatePage(){
    counter.innerHTML = cookies;
    pointerCounter.innerHTML = "Pointers: " + pointers;
    pointerCost.innerHTML = "Cost: " + pointerCostVar;
}

pointerUpdate();