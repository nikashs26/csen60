//console.log("hello world")
//alert('Upgrade your VPN! CLICK BELOW')
//window.document.write('<p>Welcome to CSEN 60!</p>');

//window.document.append('<p>This should come after the h1</p>')

/*
  Function to calculate the sum of two numbers.
  Inputs: a, b - numbers to be added.
  Output: returns the sum of a and b.
*/
//TODO fix this function

/**
 * @description
 * @param {*}a
 * @param {*}b
 * @returns
 */ 
function add(a, b) {
    return a + b;
}

let x = 100;
/*
const x is a declaration
x = 2 is an initialization
*/
if (true) {
    x = 200; // Same variable!
}
console.log(x); // Outputs: 200

let y;
y = null;
let z = 0;
console.log(y,z);

let greeting = "Hello, world!";
let response = `The time is ${new Date()}`;
let thought = "that one midterm was terrible for me specifically";
console.log(response)

let age = 17;

if (age > 18)
{
  console.log("You are of age.")
}
else if (age < 17)
{
  console.log(`You are not of age. You gotta wait ${18-age} years.`);
}
else (age == 17)
{
  console.log(`You are not of age. You gotta wait 1 year.`);
}

let person = {
  name: "John",
  age: 30,
  isStudent: false
};

console.log(person["age"]);

console.log(typeof(person.isStudent));

alert("Urgent: This is not an important message. PLEASE IGNORE THIS AS SOON AS POSSIBLE.");


// Strict equality: first checks if the types are the same, then checks if the content is equal.
console.log(3 === '3'); // false

// Loose equality
console.log(3 == '3'); // true