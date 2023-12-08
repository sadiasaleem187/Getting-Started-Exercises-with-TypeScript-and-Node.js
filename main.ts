//Q1:
// Install Node.js, TypeScript and VS Code on your computer.
//Q2:
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let firstName="sadia"
console.log(`hello ${firstName}  would you like to learn some Python today?”`)
//Q3:
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let first_Name = "wajdan"
console.log(first_Name.toLowerCase())
console.log(first_Name.toUpperCase())
console.log(first_Name.charAt(0).toUpperCase()+ first_Name.slice(1))
//Q4:
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote ="Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
console.log(quote)
//Q5:
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let Famous_poet  = "Albert_Eintein" 
let message = "A person who never made a mistake never tried anything new."
console.log(`${Famous_poet} once said,"${message}"`)
//Q6:
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let fname="sadia\nabrar"
let fname1="sadia\tabrar"
console.log(fname)
console.log(fname1)
//Q7:
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let a = 5
let b = 3
console.log(a + b )
let c = 10
let d = 2
console.log(c - d)
let e =4 
let f =2 
console.log(e * f )
let g = 16
let h = 2
console.log(g / h )
//Q8:
//You should create four lines that look like this:

//console.log(5 + 3)

//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5+3)
console.log(5+3)
console.log(5+3)
console.log(5+3)
//Q9:
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let n = 9
console.log(`my fav num is ${n} `)
//Q10:
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//addition
let a1 = 10
let a2 = 20
console.log(`${a1}+${a2}=${a1+a2}`)
//sub
let k = 10
let l = 20
console.log(`${k}-${l}=${k-l}`)
//Q11:
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let Names = ["sadia","abrar","wajdan","maliha"]
console.log(Names[0])
console.log(Names[1])
console.log(Names[2])
console.log(Names[3])
//Q12:
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let message1 = "this is your mbl"
console.log(Names[0] + " " + message1)
console.log(Names[1] + " " + message1)
console.log(Names[2] + " " + message1)
console.log(Names[3] + " " + message1)
//Q13:
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["honda motorcycle","honda car"]
let message2= "I would like to own a"
console.log( message2 + " " +transportation[0])
console.log( message2 + " " +transportation[1])
//Q14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest = ["sadia","sadaf","aleeza"]
let message4="you are invited for dinner"
guest.map((items)=>(console.log(`${items} ${message4}`)))
//Q15:
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.
let cannotcome="sadaf"
console.log(`${cannotcome} is not coming to dinner`)
let newguest="zebi"
guest[guest.indexOf(cannotcome)]=newguest
guest.map((items)=>(console.log(`${items} you are invited to dinner`)))
//Q16:
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let goodnews="we have found a bigger dinner table"
console.log(goodnews)
guest.unshift("maliha")
console.log(guest)
guest.splice(2,0,"aliya")
guest.map((items)=>(console.log(`${items} ${message4}`)))
//Q17:
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("sorry i dont have any space for you ")
while(guest.length>2){let removeguest=guest.pop()
    console.log(`sorry ${removeguest} you are not invite in dinner`)}
guest.map((items)=>(console.log(`${items} you are still invited for dinner`)))
guest.pop()
guest.pop()
console.log(guest)
//Q19:
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guests = ["sadia","sadaf","aleeza"]
console.log(guests.length + " " + "people"+ " " + "are invited for dinner") 



 


