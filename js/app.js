'use strict';
// -----------------------------------------------------------NEW CODE---------------------------------------------
let container = document.getElementById('container');
let table = document.createElement('table');
container.append(table);
let hours = ['6 AM', '7 AM','8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM',
  '7 PM', '8 PM'];
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let shops = [];
function Shop (branchName, minCust, maxCust, avgCookies){
  this.branchName = branchName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randomNumber = [];
  this.cookiesArray = [];
  this.total = 0;
  shops.push(this);
}

Shop.prototype.getRandomNumberOfCustomers = function(){
  for(let i =0; i<hours.length ; i++){
    this.randomNumber.push(getRandomNumber(this.minCust, this.maxCust));

    // console.log(randomNumber[i]);
  }
};

Shop.prototype.getCookies = function(){
  for (let i =0; i<hours.length; i++){
    this.cookiesArray.push(this.randomNumber[i]*Math.floor(this.avgCookies));
    this.total = this.total+this.cookiesArray[i];
  }
};

let form = document.getElementById('form');
form.addEventListener('submit', addingToTable);
function addingToTable(event) {
  event.preventDefault();
  let i = 7;
  // console.log(event.target.branchName.value);
  let name = event.target.branchName.value;
  let minimumCust = event.target.minCust.value;
  let maximumCust = event.target.maxCust.value;
  let averageCookies = event.target.avgCookies.value;
  // console.log(maximumCust);

  let branch = new Shop(name, parseInt(minimumCust), parseInt(maximumCust), parseInt(averageCookies));
  branch.getRandomNumberOfCustomers();
  branch.getCookies();
  branch.render();
  table.deleteRow(i);
  ++i;
  footer();
  // console.log(branch);
}
// This is the table section
//THIS FUNCTION IS RESPONSIBLE FOR VIEWING DATA ON THE TABLE.
Shop.prototype.render = function(){
  //this tableHeadingRow
  let tableHeadingRow = document.createElement('tr');
  table.append(tableHeadingRow);

  let tableData = document.createElement('td');
  tableHeadingRow.append(tableData);
  tableData.textContent = this.branchName;

  for (let i = 0; i<hours.length; i++){
    let contentData = document.createElement('td');
    tableHeadingRow.append(contentData);
    contentData.textContent = this.cookiesArray[i];

  }
  let dailyLocationData = document.createElement('td');
  tableHeadingRow.append(dailyLocationData);
  dailyLocationData.textContent = this.total;

};
// This function is only responsible for the heading NO CALCULATION
function header() {
  let tableHeadingRow = document.createElement('tr');
  table.append(tableHeadingRow);
  let tableHeading = document.createElement('th');
  tableHeadingRow.append(tableHeading);

  for (let i = 0; i<hours.length; i++){
    tableHeading = document.createElement('th');
    tableHeadingRow.append(tableHeading);
    tableHeading.textContent = ' '+hours[i]+ ' ';
  }
  // last heading
  let tableHeading2 = document.createElement('th');
  tableHeadingRow.append(tableHeading2);
  tableHeading2.textContent = 'Daily Location Total';
}
function footer(){
  let sumOfTotal = 0;

  // Credit to w3Schools for helping me to create footer table.
  let footer = table.createTFoot();
  let row = footer.insertRow(0);
  let cell = row.insertCell(0);
  cell.innerHTML = '<b>Total</b>';
  for (let i = 0; i<hours.length; i++){
    let sum = 0;
    for(let j =0; j<shops.length;j++){
      sum = sum + shops[j].cookiesArray[i];
      sumOfTotal = sumOfTotal+shops[j].cookiesArray[i];
    }
    let tableFooterData = document.createElement('td');
    row.append(tableFooterData);
    tableFooterData.textContent = sum;
  }
  let finalTotal = document.createElement('th');
  row.appendChild(finalTotal);
  finalTotal.textContent = sumOfTotal;

}



new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);
// table.textContent =' ';
// new Shop('Amman', 3, 65, 2.1);
console.log(shops);
header();
for(let i = 0; i<shops.length; i++){
  shops[i].getRandomNumberOfCustomers();
  shops[i].getCookies();
  shops[i].render();
}
footer();
