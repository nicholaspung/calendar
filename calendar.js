// grabbing browser dates

let today = new Date();

let todayDay = today.getDay();
let todayDate = today.getDate();
let todayMonth = today.getMonth();
let todayYear = today.getFullYear();

console.log('Day', todayDay);
console.log('Date', todayDate);
console.log('Month', todayMonth);
console.log('Year', todayYear);

// creating a calendar template
let days31 = 31;
let days30 = 30;
let days29 = 29;
let days28 = 28;

let january = days31, march = days31, may = days31, july = days31, august = days31, october = days31, december = days31;
let april = days30, june = days30, september = days30, november = days30;
let february = days28;

let year = [january, february, march, april, may, june, july, august, september, october, november, december];
