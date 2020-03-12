let myName = "madelyn"
console.log(myName)

let sumX = 5;
let sumY = 4;
let sumZ = sumX + sumY;
console.log(sumZ)


function sayHello() {
    alert("Hello World!");
}
sayHello();

var age = 21; 27; 18; 17;

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge('Charles', 27);
checkAge("Abby", 25);
checkAge("John", 21);
checkAge("Josh", 18);

var favVeg = ["carrots", "broccoli", "zucchini"];
for (let i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i])
}

var people = [
    {
        name: "mag",
        age: 20
    },
    {
        name: "lucie",
        age: 20
    }
] 
checkAge(people[0].name, people[0].age);
checkAge(people[1].name, people[1].age);

function getLength(word) {
    return word.length
}

let theWordLength = getLength("Hello");

if(theWordLength % 2 === 0) 
{
    console.log("The world is nice and even!");
}
else{  
     console.log("The world is an odd place!");
}