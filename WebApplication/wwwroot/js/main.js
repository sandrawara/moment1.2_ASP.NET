var myDate = new Date();
var myDay = myDate.getDay();

// Array of days. 
var weekday = ['Söndag', 'Måndag', 'Tisdag',
    'Onsdag', 'Torsdag', 'Fredag', 'Lördag'
];
document.write("Idag är det " + weekday[myDay]);
