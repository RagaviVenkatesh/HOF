// function square(num) {
//   return num * num;
// }

// let square = (num) => {
//   return num * num;
// };

let square = (num) => num * num;

console.log(square(10));

// function multiply(num1, num2) {
//   return num1 * num2;
// }

let multiply = (num1, num2) => num1 * num2;

console.log(multiply(10, 50));
console.log(multiply(2, 5));
console.log(multiply(2.5, 3.0));

// The map() method creates a new array by applying a function to each element in the original array.
// Example 1: Multiply Each Number by 2
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example 2: Extract Names from an Array of Objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names = users.map((user) => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// Converts an array of Fahrenheit temperatures to Celsius.
const fahrenheit = [32, 50, 77, 104];

const celsius = fahrenheit.map((temp) => ((temp - 32) * 5) / 9);

console.log(celsius); // Output: [0, 10, 25, 40]

// Converts an array of names to uppercase.
const names = ["alice", "bob", "charlie"];

const capitalizedNames = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);

console.log(capitalizedNames); // Output: ["Alice", "Bob", "Charlie"]

// Add a New Property to Objects
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 40 },
];

const updatedUsers = users.map((user) => ({
  ...user, // Keep existing properties
  membership: user.age >= 18 ? "Adult" : "Minor",
}));

console.log(updatedUsers);
/* Output:
[
    { name: "Alice", age: 25, membership: "Adult" },
    { name: "Bob", age: 17, membership: "Minor" },
    { name: "Charlie", age: 40, membership: "Adult" }
]
*/

// Converts an array of numeric strings to actual numbers.
const stringNumbers = ["10", "20", "30", "40"];

const numbers = stringNumbers.map(Number);

console.log(numbers); // Output: [10, 20, 30, 40]

// Generates an array of <li> elements from an array of strings.
const fruits = ["Apple", "Banana", "Cherry"];

const listItems = fruits.map((fruit) => `<li>${fruit}</li>`);

console.log(listItems);
// Output: ["<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>"]

// Converts an array of objects into a dictionary format.
const products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Phone" },
  { id: 103, name: "Tablet" },
];

const productDictionary = products.map((product) => ({
  [product.id]: product.name,
}));

console.log(productDictionary);
/* Output:
[
    { '101': 'Laptop' },
    { '102': 'Phone' },
    { '103': 'Tablet' }
]
*/

// Converts an array of date strings into a readable format.
const dates = ["2025-03-01", "2025-04-15", "2025-05-30"];

const formattedDates = dates.map((date) => {
  const d = new Date(date);
  return d.toDateString();
});

console.log(formattedDates);
// Output: ["Sat Mar 01 2025", "Tue Apr 15 2025", "Fri May 30 2025"]

// Takes a sentence and returns the length of each word.
const sentence = "JavaScript is awesome";

const wordLengths = sentence.split(" ").map((word) => word.length);

console.log(wordLengths); // Output: [10, 2, 7]

// The map() function is powerful for transforming arrays.
// It can be used for:

// Mathematical calculations (squaring numbers, temperature conversion)
// Data transformation (extracting names, adding new properties)
// Formatting (dates, HTML generation)
// String manipulation (capitalization, sentence processing)

// The filter() method creates a new array containing only elements that match a specific condition.

// Filters even numbers from an array.
const numbers = [10, 15, 20, 25, 30, 35];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [10, 20, 30]

// Filters names with more than 5 characters.
const names = ["Alice", "Bob", "Charlie", "David", "Edward"];

const longNames = names.filter((name) => name.length > 5);

console.log(longNames); // Output: ["Charlie", "Edward"]

// Removes all negative numbers from an array.
const numbers = [3, -1, 5, -6, 9, -4];

const positiveNumbers = numbers.filter((num) => num >= 0);

console.log(positiveNumbers); // Output: [3, 5, 9]

// Filters users who are 18 or older.
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 19 },
];

const adults = users.filter((user) => user.age >= 18);

console.log(adults);
/* Output:
[
    { name: "Bob", age: 22 },
    { name: "David", age: 19 }
]
*/

// Filters only completed tasks from a To-Do List.
const tasks = [
  { task: "Do laundry", completed: false },
  { task: "Pay bills", completed: true },
  { task: "Grocery shopping", completed: false },
  { task: "Exercise", completed: true },
];

const completedTasks = tasks.filter((task) => task.completed);

console.log(completedTasks);
/* Output:
[
    { task: "Pay bills", completed: true },
    { task: "Exercise", completed: true }
]
*/

// Filters students who scored 40 or more.
const students = [
  { name: "Alice", score: 35 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 75 },
  { name: "David", score: 39 },
];

const passedStudents = students.filter((student) => student.score >= 40);

console.log(passedStudents);
/* Output:
[
    { name: "Bob", score: 55 },
    { name: "Charlie", score: 75 }
]
*/

// Filters words that contain the letter "a".
const words = ["apple", "banana", "grape", "orange", "kiwi"];

const wordsWithA = words.filter((word) => word.includes("a"));

console.log(wordsWithA); // Output: ["apple", "banana", "grape", "orange"]

// Filters only products that are in stock.
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
  { name: "Tablet", inStock: true },
  { name: "Headphones", inStock: false },
];

const availableProducts = products.filter((product) => product.inStock);

console.log(availableProducts);
/* Output:
[
    { name: "Laptop", inStock: true },
    { name: "Tablet", inStock: true }
]
*/

// Filters emails that belong to Gmail.
const emails = [
  "alice@gmail.com",
  "bob@yahoo.com",
  "charlie@gmail.com",
  "david@outlook.com",
];

const gmailUsers = emails.filter((email) => email.endsWith("@gmail.com"));

console.log(gmailUsers); // Output: ["alice@gmail.com", "charlie@gmail.com"]

// Filters elements at odd indices in an array.
const numbers = [10, 20, 30, 40, 50, 60];

const oddIndexNumbers = numbers.filter((_, index) => index % 2 !== 0);

console.log(oddIndexNumbers); // Output: [20, 40, 60]

// filter() is great for extracting specific data from an array.
// It is widely used in real-world applications like search filters, data validation, and processing datasets.
// Mastering filter() will enhance your JavaScript coding efficiency!

// The reduce() function is powerful for accumulating values in an array into a single result.

// Adds all elements of an array.
const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 100

// Multiplies all numbers in an array.
const numbers = [2, 3, 4, 5];

const product = numbers.reduce((acc, num) => acc * num, 1);

console.log(product); // Output: 120

// Finds the highest number in an array.
const numbers = [15, 42, 7, 89, 23];

const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);

console.log(max); // Output: 89

// Finds the smallest number in an array.
const numbers = [15, 42, 7, 89, 23];

const min = numbers.reduce((acc, num) => (num < acc ? num : acc), numbers[0]);

console.log(min); // Output: 7

// Counts how many times each word appears in an array.
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);
/* Output:
{
    apple: 3,
    banana: 2,
    orange: 1
}
*/

// Flattens a multi-dimensional array into a single array.
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);

console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// Finds the average of an array of numbers.
const scores = [90, 85, 70, 88, 95];

const average = scores.reduce(
  (acc, score, _, array) => acc + score / array.length,
  0
);

console.log(average); // Output: 85.6

// Combines an array of objects into a single object.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const merged = users.reduce(
  (acc, user) => ({ ...acc, [user.name]: user.age }),
  {}
);

console.log(merged);
/* Output:
{
    Alice: 25,
    Bob: 30,
    Charlie: 35
}
*/

// reduce() is one of the most versatile JavaScript functions.
// It helps accumulate values, process data, and transform arrays into objects, sums, or even grouped collections.
// Mastering reduce() can optimize your JavaScript skills significantly!
