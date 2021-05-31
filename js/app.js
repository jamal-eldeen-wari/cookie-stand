'use strict';

// let randomNumberOfCustomersPerHour = [];
// let cookiesArrayForSeattle =[];
// let Seattle = {
//   min: 23,
//   max: 65,
//   avgCookie: 6.3,
//   getRandomNumberOfCustomers: function(){
//     // let randomNumberOfCustomersPerHour = [];
//     for(let i =0; i<hours.length ; i++){
//       randomNumberOfCustomersPerHour.push(getRandomNumber(this.min, this.max));
//     //   console.log(randomNumberOfCustomersPerHour);
//     }
//   },
//   getCookies: function(){
//     for (let i =0; i<hours.length; i++){
//       cookiesArrayForSeattle.push(randomNumberOfCustomersPerHour[i]*Math.ceil(this.avgCookie));
//     //   console.log(cookiesArrayForSeattle[i]);
//     }
//   }
// };

// Seattle.getRandomNumberOfCustomers(this.min,this.max);
// Seattle.getCookies();
// // Adding elements in HTML
// let parentSeattle = document.getElementById('seattle');
// let child;
// let childSum;
// let childTitle;
// let sum = 0;
// childTitle = document.createElement('p');
// parentSeattle.append(childTitle);
// childTitle.textContent = 'Seattle: ';
// // console.log('Seattle: ');
// for(let i = 0; i<hours.length; i++){
//   child = document.createElement('li');
//   parentSeattle.append(child);
//   child.textContent =hours[i]+':  '+cookiesArrayForSeattle[i] + ' Cookies';
//   //   console.log(hours[i]+':  '+cookiesArrayForSeattle[i] + ' Cookies');
//   sum = sum + cookiesArrayForSeattle[i];
// }
// childSum = document.createElement('li');
// parentSeattle.append(childSum);
// childSum.textContent = 'Total '+ sum+' Cookies';
// // console.log('Total '+ sum+' Cookies');
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
  }
};
// This is the table section
Shop.prototype.render = function(){
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
};
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
  let tableHeading2 = document.createElement('th');
  tableHeadingRow.append(tableHeading2);
  tableHeading2.textContent = 'Daily Location Total';
  // let dailyLocationData = document.createElement('td');
  // tableHeadingRow.append(dailyLocationData);
  // THIS CODE NEEDS FIXING
  for(let i = 0; i<hours.length; i++){
    let dailyLocationData = document.createElement('td');
    tableHeadingRow.append(dailyLocationData);
  }
}
function footer(){
  let sum = 0;
  // Credit to w3Schools for helping me to create footer table.
  let footer = table.createTFoot();
  let row = footer.insertRow(0);
  let cell = row.insertCell(0);
  cell.innerHTML = '<b>Total</b>';
  for (let i = 0; i<hours.length; i++){
    let tableFooterData = document.createElement('td');
    row.append(tableFooterData);
    tableFooterData.textContent = sum;
    for(let j =0; j<shops.length;j++){
      sum = sum+this.cookiesArray;
    }
  }

}

header();
footer();
new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

for(let i = 0; i<shops.length; i++){
  shops[i].getRandomNumberOfCustomers();
  shops[i].getCookies();
  shops[i].render();


}



// -----------------------------------------------------------------------------
// For Tokyo
// let randomNumberOfCustomersPerHourForTokyo = [];
// let cookiesArrayForTokyo = [];
// let Tokyo = {
//   min: 3,
//   max: 24,
//   avgCookie: 1.2,
//   getRandomNumberOfCustomers: function(){
//     for(let i =0; i<hours.length ; i++){
//       randomNumberOfCustomersPerHourForTokyo.push(getRandomNumber(this.min, this.max));
//     //   console.log(randomNumberOfCustomersPerHourForTokyo);
//     }
//   },
//   getCookies: function(){
//     for (let i =0; i<hours.length; i++){
//       cookiesArrayForTokyo.push(randomNumberOfCustomersPerHourForTokyo[i]*Math.ceil(this.avgCookie));
//     //   console.log(cookiesArrayForTokyo[i]);
//     }
//   }

// };
// Tokyo.getRandomNumberOfCustomers(this.min, this.max);
// Tokyo.getCookies();
// // Adding elements in HTML
// let parentTokyo = document.getElementById('tokyo');
// let childTokoyo;
// let childTitleTokyo;
// childTitleTokyo = document.createElement('p');
// parentTokyo.append(childTitleTokyo);
// childTitleTokyo.textContent = 'Tokyo: ';
// let sumTokyo = 0;
// // console.log('Tokyo: ');
// for(let i = 0; i<hours.length; i++){
//   childTokoyo =document.createElement('li');
//   parentTokyo.append(childTokoyo);
//   childTokoyo.textContent =hours[i]+':  '+cookiesArrayForTokyo[i] + ' Cookies';
//   //   console.log(hours[i]+':  '+cookiesArrayForTokyo[i] + ' Cookies');
//   sumTokyo = sumTokyo + cookiesArrayForTokyo[i];
// }
// let childSumTokyo;
// childSumTokyo = document.createElement('li');
// parentTokyo.append(childSumTokyo);
// childSumTokyo.textContent = 'Total '+ sumTokyo+' Cookies';
// // console.log('Total '+ sumTokyo+' Cookies');
// // ------------------------------------------------
// // For Dubai
// let randomNumberOfCustomersPerHourForDubai = [];
// let cookiesArrayForDubai = [];
// let Dubai = {
//   min: 11,
//   max: 38,
//   avgCookie: 3.7,
//   getRandomNumberOfCustomers: function(){
//     for(let i =0; i<hours.length ; i++){
//       randomNumberOfCustomersPerHourForDubai.push(getRandomNumber(this.min, this.max));
//     //   console.log(randomNumberOfCustomersPerHourForDubai);
//     }
//   },
//   getCookies: function(){
//     for (let i =0; i<hours.length; i++){
//       cookiesArrayForDubai.push(randomNumberOfCustomersPerHourForDubai[i]*Math.ceil(this.avgCookie));
//     //   console.log(cookiesArrayForDubai[i]);
//     }
//   }

// };
// Dubai.getRandomNumberOfCustomers(this.min, this.max);
// Dubai.getCookies();
// // Adding elements in HTML
// let parentDubai = document.getElementById('dubai');
// let childDubai;
// let childDubaiTitle = document.createElement('p');
// parentDubai.append(childDubaiTitle);
// childDubaiTitle.textContent = 'Dubai: ';
// let sumDubai = 0;
// console.log('Dubai: ');
// for(let i = 0; i<hours.length; i++){
//   childDubai = document.createElement('li');
//   parentDubai.append(childDubai);
//   childDubai.textContent = hours[i]+':  '+cookiesArrayForDubai[i] + ' Cookies';
//   //   console.log(hours[i]+':  '+cookiesArrayForDubai[i] + ' Cookies');
//   sumDubai = sumDubai + cookiesArrayForDubai[i];
// }
// let totalDubai = document.createElement('li');
// parentDubai.append(totalDubai);
// totalDubai.textContent = 'Total '+ sumDubai+' Cookies';
// // console.log('Total '+ sumDubai+' Cookies');

// // -----------------------------------------
// // For Paris
// let randomNumberOfCustomersPerHourForParis = [];
// let cookiesArrayForParis = [];
// let Paris = {
//   min: 20,
//   max: 38,
//   avgCookie: 2.3,
//   getRandomNumberOfCustomers: function(){
//     for(let i =0; i<hours.length ; i++){
//       randomNumberOfCustomersPerHourForParis.push(getRandomNumber(this.min, this.max));
//     //   console.log(randomNumberOfCustomersPerHourForParis);
//     }
//   },
//   getCookies: function(){
//     for (let i =0; i<hours.length; i++){
//       cookiesArrayForParis.push(randomNumberOfCustomersPerHourForParis[i]*Math.ceil(this.avgCookie));
//     //   console.log(cookiesArrayForParis[i]);
//     }
//   }

// };
// Paris.getRandomNumberOfCustomers(this.min, this.max);
// Paris.getCookies();
// // Adding elements in HTML
// let parentParis = document.getElementById('paris');
// let childParis ;
// let childParisTitle = document.createElement('p');
// parentParis.append(childParisTitle);
// childParisTitle.textContent = 'Paris: ';
// let sumParis = 0;
// // console.log('Paris: ');
// for(let i = 0; i<hours.length; i++){
//   childParis = document.createElement('li');
//   parentParis.append(childParis);
//   childParis.textContent = hours[i]+':  '+cookiesArrayForParis[i] + ' Cookies';
//   //   console.log(hours[i]+':  '+cookiesArrayForParis[i] + ' Cookies');
//   sumParis = sumParis + cookiesArrayForParis[i];
// }
// let parisSum = document.createElement('li');
// parentParis.append(parisSum);
// parisSum.textContent = 'Total '+ sumParis+' Cookies';
// // console.log('Total '+ sumParis+' Cookies');

// // ---------------------------------------------------
// // For Lima
// let randomNumberOfCustomersPerHourForLima = [];
// let cookiesArrayForLima = [];
// let Lima = {
//   min: 2,
//   max: 16,
//   avgCookie: 4.6,
//   getRandomNumberOfCustomers: function(){
//     for(let i =0; i<hours.length ; i++){
//       randomNumberOfCustomersPerHourForLima.push(getRandomNumber(this.min, this.max));
//     //   console.log(randomNumberOfCustomersPerHourForLima);
//     }
//   },
//   getCookies: function(){
//     for (let i =0; i<hours.length; i++){
//       cookiesArrayForLima.push(randomNumberOfCustomersPerHourForLima[i]*Math.ceil(this.avgCookie));
//     //   console.log(cookiesArrayForLima[i]);
//     }
//   }

// };
// Lima.getRandomNumberOfCustomers(this.min, this.max);
// Lima.getCookies();
// // Adding elements in HTML
// let parnetLima = document.getElementById('lima');
// let childLima;
// let childLimaTitle = document.createElement('p');
// parnetLima.append(childLimaTitle);
// childLimaTitle.textContent = 'Lima: ';
// let sumLima = 0;
// // console.log('Lima: ');
// for(let i = 0; i<hours.length; i++){
//   childLima = document.createElement('li');
//   parnetLima.append(childLima);
//   childLima.textContent = hours[i]+':  '+cookiesArrayForLima[i] + ' Cookies';
//   //   console.log(hours[i]+':  '+cookiesArrayForLima[i] + ' Cookies');
//   sumLima = sumLima + cookiesArrayForLima[i];
// }
// let limaSum = document.createElement('li');
// parnetLima.append(limaSum);
// limaSum.textContent = 'Total '+ sumLima+' Cookies';
// // console.log('Total '+ sumLima+' Cookies');
