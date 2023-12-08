"use strict";
//q2
let firstName = "sadia";
console.log(`hello ${firstName}  would you like to learn some Python today?”`);
// q3
let first_Name = "wajdan";
console.log(first_Name.toLowerCase());
console.log(first_Name.toUpperCase());
console.log(first_Name.charAt(0).toUpperCase() + first_Name.slice(1));
// q4
let quote = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”";
console.log(quote);
// q5
let Famous_poet = "Albert_Eintein";
let message = "A person who never made a mistake never tried anything new.";
console.log(`${Famous_poet} once said,"${message}"`);
// q6
let fname = "sadia\nabrar";
let fname1 = "sadia\tabrar";
console.log(fname);
console.log(fname1);
// q7
let a = 5;
let b = 3;
console.log(a + b);
let c = 10;
let d = 2;
console.log(c - d);
let e = 4;
let f = 2;
console.log(e * f);
let g = 16;
let h = 2;
console.log(g / h);
// q8
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// q9
let n = 9;
console.log(`my fav num is ${n} `);
// q10
//addition
let a1 = 10;
let a2 = 20;
console.log(`${a1}+${a2}=${a1 + a2}`);
//sub
let k = 10;
let l = 20;
console.log(`${k}-${l}=${k - l}`);
//q11
let Names = ["sadia", "abrar", "wajdan", "maliha"];
console.log(Names[0]);
console.log(Names[1]);
console.log(Names[2]);
console.log(Names[3]);
//q12
let message1 = "this is your mbl";
console.log(Names[0] + " " + message1);
console.log(Names[1] + " " + message1);
console.log(Names[2] + " " + message1);
console.log(Names[3] + " " + message1);
//q13
let transportation = ["honda motorcycle", "honda car"];
let message2 = "I would like to own a";
console.log(message2 + " " + transportation[0]);
console.log(message2 + " " + transportation[1]);
//q14
let guest = ["sadia", "sadaf", "aleeza"];
let message4 = "you are invited for dinner";
guest.map((items) => (console.log(`${items} ${message4}`)));
//q15
let cannotcome = "sadaf";
console.log(`${cannotcome} is not coming to dinner`);
let newguest = "zebi";
guest[guest.indexOf(cannotcome)] = newguest;
guest.map((items) => (console.log(`${items} you are invited to dinner`)));
//q16
let goodnews = "we have found a bigger dinner table";
console.log(goodnews);
guest.unshift("maliha");
console.log(guest);
guest.splice(2, 0, "aliya");
guest.map((items) => (console.log(`${items} ${message4}`)));
//q17
console.log("sorry i dont have any space for you ");
while (guest.length > 2) {
    let removeguest = guest.pop();
    console.log(`sorry ${removeguest} you are not invites in dinner`);
}
guest.map((items) => (console.log(`${items} you are still invited foe dinner`)));
guest.pop();
guest.pop();
console.log(guest);
//q18
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let cities = ["pakistan", "uk", "india", "london"];
console.log(cities);
console.log(cities.sort());
console.log(cities);
console.log(cities.reverse());
//q19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guests = ["sadia", "sadaf", "aleeza"];
console.log(guests.length + " " + "people" + " " + "are invited for dinner");
