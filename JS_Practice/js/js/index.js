console.log("Hello all");

// const name = "Ankur Patel";
// const age = 21;
// const sport = "cricket";

// let html;
// html = "Ankur Patel Here...";

//html = html.concat("Hello", " ", "css");

//console.log(html);

//console.log(html.length);
//console.log(html.toLowerCase());
//console.log(html.toUpperCase());

//console.log(html.indexOf("Here"));
//console.log(html.LastIndexOf("e"));

// console.log(html.endsWith("..."));
// console.log(html.includes("Here"));

// console.log(html.substring(0, 5));
// console.log(html.slice(0, 5));
// console.log(html.slice(-5));

// console.log(html.split(" "));

// console.log(html.replace("Here", "is back"));

/*document.getElementById("demo").innerHTML = "\"Ankur\" Patel Here...";
document.getElementById("demo1").innerHTML = `"Ankur" Patel here`;

document.body.innerHTML = `AKP Here...
                            <h1>I am ${age} year old...</h1>
                            <p>I like to play ${sport}</p>
                            <strong>hello</strong>`;*/

/* ----- CODE FOR STRINGS -----
console.log("i am patel...");

function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    document.getElementById("demo").innerHTML = `Hello ${name}
    <p>Your email address is ${email}</p>`;
}*/

// ----- code for arrays -----
// console.log("This is for arrays");

// const arr = [20, 30, 40, 50];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);

// let array = new Array(20, 30, 40, 50);
// console.log(array.length); //array property: length
// console.log(Array.isArray(array)); //array method: isArray

// array[0] = 60;
// let arrayelement = array[0];
// console.log("FIRST ARRAY ELEMENT IS ", arrayelement);
// console.log(array);

// --- Mutating or modifing arrays ---
// array.push(70);
// array.pop();
// array.shift();
// array.unshift(10);
// array.reverse();
// let array2 = new Array(1, 2, 3, 4);
// array = array.concat(array2);
// console.log(array);

// ----- OBJECTS -----

// let student = {
//     fname: "ankur",
//     lname: "patel",
//     age: 21,
//     full: {
//         "full name": "Ankur Patel"
//     }
// };

// // let details = `Good Evening ${student.fname}
// // <p>You are ${student.age} year old!!!</p>`;

// // document.getElementById("fid").innerHTML = details;

// console.log(student.full["full name"]);

// console.log(student.fname);
// console.log(student["lname"]);

// ----- if-else STATEMENT -----

// const age = 330;
// const canDrive = true;

// if (canDrive && age > 18) {
//     console.log("You have LICENCE");
// } else if (canDrive && age < 18) {
//     console.log("YOU CAN NOT DRIVE");
// } else {
//     console.log("You didn't have LICENCE");
// }

// console.log(age == 20 ? "Age is 20" : "Age is not 20"); //ternary operator

// ----- SWITCH STATEMENT -----

// switch (age) {
//     case 20:
//         console.log("You are 20");
//         break;

//     case 30:
//         console.log("You are 30");
//         break;

//     default:
//         console.log("You are unknown");
//         break;
// }

// ----- LOOPs : for, while, do-while -----

// console.log('hello all');

// let sum = 0;
// for (let i = 1; i < 6; i++) {
//     sum = sum + i;
// }

// let i = 1;
// while (i < 6) {
//     sum = sum + i;
//     i += 1;
// }

// let i = 1;
// do {
//     sum = sum + i;
//     i += 1;
// } while (i < 6)
// console.log(sum);

//Iterate array
// let arr = [2, 3, 4, 5, 6, 7];
// arr.forEach(function(element, index, array) {
//     console.log(element, index, array);
// });

// Aerrow Function
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(element => {
//     console.log(element);
// });

//  Iterate object
// let obj = {
//     fname: "Ankur",
//     lname: "Patel",
//     age: 21
// }

// for (let key in obj) {
//     console.log(`${key}`);
// }

// ----- FUNCTIONs -----

// let sum = function(a, b) {
//     let sum;
//     sum = a + b;
//     return sum;
// }

// let ans = sum(25, 25);
// let finalAnswer = ans;
// console.log(`Sum = ${finalAnswer}`);

// let minusFive = function(a, b) {
//     let val1 = a - 5;
//     let val2 = b - 5;
//     return [val1, val2];
// }

// let [result1, result2] = minusFive();
// console.log(result1);

// console.log(minusFive(55, 55));

// const detail = {
//     fname: "Ankur",
//     game: function() {
//         return "CS:GO"
//     }
// }

// console.log(detail.game())

// ----- EXTRA -----

// function getNames() {

//     let firstName = 'Ankur',
//         lastName = 'Patel';

//     return { firstName, lastName };
// }

// let { firstName, lastName } = getNames();

// document.getElementById("fid").innerHTML = `Hey everyone... <h4>${firstName + " " + lastName} Here</h4>`;

// function getScore() {
//     return [50, 60, 70];
// }

// let [x, y, z] = getScore();
// console.log(x); //50
// console.log(y); //60
// console.log(z); //70

// ----- WINDOW object -----

// let a = window.document;
// alert('Ankur Patel Here...');
// a = prompt('Enter your name:');
// a = confirm('Are you sure?');

// a = innerHeight;
// a = innerWidth;

// a = scrollX;
// a = scrollY;
// a = location;
// a = location.href;
// a = location.toString();

// a = history;
// a = history.go(1); //go to next page
// a = history.go(-1); //go to previous page
// a = history.back(1); //go to previous page
// console.log(a);

// ----- DOM(Document Object Model) IT IS STRUCTURAL REPRESENTATION OF HTML DOCUMENT -----

// let a = document;
// a = document.all; //HTML ALL COLLECTIONS
// a = document.body;
// a = document.forms;

//LINKS in HTML Document
// a = document.links; //all links
// a = document.links[0];
// a = document.links[0].href; //href of link

//IMAGES in HTML DOCUMENT
// a = document.images;
// a = document.images[0];
// a = document.images[0].src;

//SCRIPTS in HTML DOCUMENT
// a = document.scripts[0].src;
// console.log(a);

// ----- HTML ELEMENT SELECTOR -----

/* 
     1. Single Element Selector 
     2. Multi Element Selector
*/

//1. Single Element Selector

// let element = document.getElementById('fid');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.innerText = "Ankur Patel Here..."; 
// element.innerHTML = "<h1>Once Again...</h1>";
// console.log(element);

// ----- Query Selector -----

// let selector = document.querySelector('#fid');
// selector = document.querySelector('.class1');
// selector = document.querySelector('p'); //Return first occurance
// console.log(selector);

// 1. Multi Element Selector

// let sel = document.getElementsByClassName('container');
// console.log(sel);
// console.log(sel[0].getElementsByClassName('class1'));
// -----select p tags from html document and change their color to red -----
// sel = document.getElementsByTagName('p');
// Array.from(sel).forEach(element => {
//     console.log(element);
//     element.style.color = 'red';
// })   

// ----- Child, Parent & Traversing the DOM -----

let cont = document.querySelector('.container');
// cont = cont.childNodes; // Include Text and Comments as well...
// cont = cont.children; // Only HTML elements
// console.log(cont);

// let nodeName = cont.childNodes[1].nodeName; // Return HTMl Element name
// console.log(nodeName);

// let nodeName = cont.children[0].nodeName;
// console.log(nodeName);

// let nodeType = cont.childNodes[1].nodeType; // Return Node Types
// console.log(nodeType);

// let node = cont.childNodes[0];
// console.log(cont.childNodes[3].nodeName);
// Node Types
// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Commemt
// 9 - Document
// 10 - Doctype

// ----- Create, Removing & Replacing Elements

// Create Element
// let element = document.createElement('p');
// element.className = 'child';
// element.id = 'elementId';
// element.innerText = 'This is child4';
// console.log(element);

// let para = document.getElementsByClassName('container'); // Select 2nd container class
// para = para[1];

// para.appendChild(element); //Appended element with para
// console.log(para);

//Replace
// let select = document.querySelector('.container');
// select = select.children;
// select = select[0];

// console.log(select.textContent); 

// let newElement = document.createElement('h3');
// newElement.innerText = 'New Heading...';
// console.log(newElement);

// select.replaceWith(newElement); //Replace "select" with "newElement"

// let name = "Ankur";

// List all Elements
// let text = "";
// for (let x of name) {
//   text += x + "<br>";
// }

// document.getElementById("demo2").innerHTML = text;

// let letters = new Set([1,2,3,4]);

// letters.forEach(function(element){
//     console.log(element);
// })
// console.log(letters.size);

// ----- Iteration -----

// let nam = "Ankur";

// Array.from(nam).forEach(function(element){
//     console.log(element);
// })

// let nameArray = new Set(['Ankur', 'Prince', 'Vivek']);
// nameArray.forEach(element =>{
//     console.log(element);
// })

// ----- SET -----

// This Set contains
// ["sumit","amit","anil","anish"]
// var set1 = new Set(["sumit","sumit","amit","anil","anish"]);

// set1.add(100); // add new element
// set1.delete("sumit"); //delete element
// set1.clear(); //clear all elements
// set1.has("anish");
// console.log(set1); 
// console.log(set1.size); //Returns size of set

// ----- MAP -----

// let brands = new Map([
//     ['BMW', 100],
//     ['LAMBORGHINI', 200],
//     ['HONDA', 300]
// ]);

// brands.set('HUNDAI', 400); //Set value
// brands.get("HONDA");
// brands.forEach(element =>{         //iteration
//     console.log(element);
// })

// ----- typeof -----

// let name = function(){
//     return 1;
// };
//  console.log(typeof(name)); 

// let demo = () => "Hello world"; //Arrow function
// console.log(demo());

// ----- JS Classes -----

// class car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     age() {
//         let myDate = new Date();
//         return (myDate.getFullYear() - this.year);
//     }
// }

// let myCar = new car("BMW", 2020);
// console.log(myCar.name);
// console.log(myCar.age());

// ----- Arrow functions -----

// let sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(10,20));

// ----- Regex -----

// /pattern/modifiers;
// /ankur/i;

// try {
//     // myFunction();
//     console.log('We are in try block');
// } catch (error) {
//     console.log('We are in catch block');
// }

// let obj = {
//     fname: 'Ankur',
//     lname: 'Patel',
//     language: "",
//     set lang(lang){
//         this.language =lang;
//     }
// };

// obj.lang = "en";

// // obj.age = 21;

// for(let key in obj){
//     console.log(`${obj[key]}`);
// }

// Session Storage

// function createItems() {
    
//     sessionStorage.test3 = 358;
//     sessionStorage.test2 = "Jim";
//     sessionStorage.test1 = "hello";
//   }
  
//   function myFunction() {
//     var x = sessionStorage.key(0);
//     document.getElementById("demo").innerHTML = x;
//   }

// let x = createItems();
// let y = myFunction();

// console.log(x);
// console.log(y);

// Fetch API
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

// function generalName(fname, lname){
//     this.firstName = fname;
//     this.lastName = lname; 
//     this.fullName = function(){
//             return (`Your full name : ${this.firstName + ' ' + this.lastName}`);
//     }
// }

// name1 = new generalName('Ankur', 'Patel');
// console.log(name1.fullName());

// Fetch url demo

// function getData(){
//     // console.log("Button clicked");
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data) ;
//     })
// }

// Fetch url using async/await

// async function getResponse(){
//     let response = await fetch('data.txt');
//     let data = await response.text();
//     document.getElementById('myContainer').innerHTML = data;
// }

// GET Request using fetch api

async function getResponse(){
    let url = 'https://api.github.com/users';
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function getApiData(){
   let users = await getResponse();

   let html = '';
   users.forEach(element => {
        let htmlSegment = `<div> <h6> id : ${element.id}</h6> 
                                 <h6> login : ${element.login}</h6>
                                 <h6> type : ${element.type}</h6>
                                 <h6> site_admin : ${element.site_admin}</h6> 
                            </div>
                            <hr>`;
        html += htmlSegment;
   });
   document.getElementById('myContainer').innerHTML = html;
}

// POST Request using fetch api

// function postData(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"Ankur627378q6","salary":"123","age":"23"}'
//     params = {
//             method : 'post',
//             headers : {
//             'content-type' : 'application/json',
//         },
//         body: JSON.stringify(data) 
//     }
//     fetch(url, params).then(response => response.json())
//     .then(data => console.log(data))
// }

