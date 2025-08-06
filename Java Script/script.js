/*
// var
var name="Sunny";
console.log(name);
var name="Sunny";
console.log(name);
name="karthik";
console.log(name);
// let
let country="India";
console.log(country);
country="bharat";
console.log(country,typeof country);
// const
 const age="20";
console.log(age);
*/

/*
//number
let a=30;
console.log(a, typeof a);
// a=3.5;
console.log(a);
let b=24

//boolean
console.log(typeof true);


//undefined
// let job=undefined;
// console.log(typeof job);
let job;
console.log(typeof job);

//null
const n=null;
console.log(typeof n);
*/

/*
//operaters
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(2**2);
*/
/*
//comparision
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
*/

/*
//input from user
const x=+prompt("Enter x value:");//first way
console.log(x, typeof x);
const y=Number(prompt("Enter y value:"));//second way
console.log(y, typeof y);

const z=Boolean(prompt("Enter z value:"));
console.log(x, typeof x);
*/

/*
//assignment operators
//1.==
console.log(10==10);
console.log(10=="10");
//2.===
console.log(20==="20");
console.log(+"20"===20);

console.log(true==="true");
console.log(false=="false");
console.log(true==1);
console.log(true===1);
console.log("25"==2+"5");
console.log("25"==2+5);
console.log(25+"25");
console.log(25-"25");
*/

/*
//increment and decrement
let k=+(prompt("Enter x value:"));
console.log("Current value of x:",k);
k++;
console.log("value of x after increment:",k);
//if we want to increment by more than one we use
k=k+2;
k+=2;
*/

/*
//logical
console.log(true&&true);
console.log(true&&false);
console.log(0&&'');
console.log(1&&'');
console.log(0||'');
console.log(1||'');
*/

/*
console.log("Problems");
console.log(10&&10);
console.log(10&&0);
console.log(0&true);
console.log(false&&true);
console.log("20"&&"India");
console.log(""||20);
console.log("a"||0);
console.log(true||false);
console.log(false||0);
console.log(20&&"10"==10);
*/
/*
//not operator
//== != and === !==
console.log(10!="10");
console.log(10 !=="10");
*/
/*
//statements
//1.if
const n=+(prompt("Enter a number:"));
if(n>0){
    console.log("n is a positive number");
}

if(n>18){
   console.log("Eligible to vote");
 }

 if(n==0){
    console.log("n is not even or odd");
 }
else if(n%2===0){
    console.log("n is even number");
}else{
    console.log("n is odd number");
}
*/
/*
const n=+(prompt("Enter a number:"));
if(n>0){
    console.log("n is a positive number");
}else{
    console.log("n is a negative number");
}
    */
   /*
// ternary operator
const result=n>0?"n is positive number":"n is negative number";
console.log(result);
const result1=n%2===0?"n is even number":"n is odd number";
console.log(result1);
const 12person=undefined;*/

//Loops

/*//1.for
for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=+prompt("Enter a value");i<=10;i++){                   //diplaying even numbers
   if(i%2===0){
     console.log(i,"is even number");
   }
}
 for(let j=+prompt("Enter a value");j<=10;j++){          //Displaying odd numbers using ternary operator
    const k=j%2!==0?j:"";
        console.log(k);
 }

 let sum=0;
 for(let i=1;i<=10;i++){
    //sum=sum+i;
    sum+=i;
 }
 console.log(sum);
 */


 /*
//2.while
let i=0;
while(i<=10){            //displaying 0to 10 nos
    console.log(i);
    i++;
}

let i=0;
let sum=0;
while(i<=20){               //displaying 0 to 20 even nos 
    if(i%2===0){
        console.log(i);
    }
    sum+=i;
    i++;
}
console.log("sum of first 20 even no's :",sum);

let n=+prompt("Enter n value:");     //sum of n no's
let i=0;
let sum=0;
while(i<=n){
    sum+=i;
    i++;
}
console.log("sum of",n,"numbers is:",sum);
*/

/*
//break
let i=0;
while(i<10){
    if(i===5){
        console.log("Out of loop");
        break;
    }
    console.log(i);
    i++;
}*/

/*
//continue
let k=0;
while(k<=10){
    k++;
    if(k===3){
        console.log("skip iteration");
        continue;
    }
    console.log(k);
}
*/
/*
//3.do-while
let j=0;
do{
    console.log("do-while loop:",j)
    j++
}while(j<=10);
*/
/*
//Functions
//1.Function declaration
function message(){
    console.log("Welcome to js functions");
}
message();
message();
message();

function greetings(name){  
    console.log("hello",name);
}
greetings("Sunny");

function addition(a,b=2){       //default parameters
    const sum=a+b;
    return sum;
}
const result=addition(4,5);
console.log(result);
const result1=addition(10);
console.log(result1);

//2.function expresion
const sub=function(a,b){
    return a-b;
};
const s=sub(10,5);
console.log(s);

//3.arrow function
const mess=()=>console.log("Hello");
mess();

const square=(n)=>{
    return n*n;
};
const res=square(5);
console.log(res); 
*/
/*
//IIFE
(function (){
    console.log("This is IIFE function");
})();

(function (name){
    console.log("Thinava",name);
})("Likitha");

(function (a,b){
    console.log(a+b);
})(5,4);
*/
/*
//callback function
const greeting=function(name,callbackFn){
    console.log("Hello",name);                   
    callbackFn();
};
const message=()=>console.log("Bye");
greeting("Sunny",message);

const calculator=(a,b,fn)=>{
};
    return fn(a,b);
const add=(a,b)=>a+b;
const res=calculator(4,5,add);
console.log(res);
*/
/*
//arrays
const a=[10,20,30,40];
console.log( a[0]);
console.log(a[a.length-1]);
console.log(a[2]);
//modifying array
a[1]="Sunny";
console.log(a[1]);
console.log(a);
a[a.length-1]= true;
console.log(a[a.length-1]);
console.log(a);

const lang=new Array();
console.log(lang);
//to add elements
lang[0]="HTML";
lang.push("python"); //last
lang.unshift("JS");  //first
console.log(lang);
//to remove elements
console.log(lang.pop()); //last
console.log(lang.shift());//first
console.log(lang);
//to get substring
const array=[10,20,30,40,50];
const newArray=array.slice(1,array.length);
console.log(newArray);
console.log(array.slice(2,4));
console.log(array.slice(1));
//splice will modify original array
array.splice(1,2,"Sunny","ab");
console.log(array);
array.splice(2,1,undefined);
console.log(array);
*/
/*
//to access array elements
const arr=[10,20,30,20,10];
console.log(arr[arr.length-1]);
arr[3]=30;
console.log(arr);
//methods
const newArr=new Array();
console.log(newArr.length);
newArr.push(5);
newArr.unshift("Sunny");
console.log(newArr);
console.log(newArr.pop());
console.log(newArr.shift());
console.log(newArr);
let lang=["python","javascript","java","javascript","c"];
console.log(lang.indexOf("javascript"));
console.log(lang.lastIndexOf("javascript"));

//lang.push("ejs");
if(lang.includes("ejs")){
    console.log("Index position",lang.indexOf("ejs"));
}else{
    console.log("ejs is not present");
}
console.log(lang.indexOf("c++"));
console.log(lang.includes("c++"));
lang=lang.concat(["react","sql"]);
console.log(lang);
console.log(lang.join("*"));
console.log(lang.sort());
console.log(lang.sort().reverse());
*/
/*
//tempalte literals ``
const arr=[10,20,30,40,50];
for(let i=0;i<arr.length;i++){
    console.log(`${arr[i]} present at index ${i}`);
}
//for in
for (const i in arr){
    document.writeln(`${arr[i]} present at index ${i} <br>`);
} 
for (const i of arr){
    document.writeln(i,"<br>");
} */
/*
//forEach
const num=[10,20,30,40];
num.forEach((element,index)=>{
    console.log(element*2);
    document.writeln(`${element} at index position ${index}<br>`)
});
//map
const newNew=num.map((element)=>element*element);
console.log(newNew);
//without using map
const emptyArr=[];
num.forEach((element)=>{
    emptyArr.push(element*element);
});
console.log(emptyArr); 
//filter
const filterArr=num.filter((element)=>element>20);
console.log(filterArr);
const result=num.reduce((acc,curr,i,num)=>acc+curr);
console.log(result);*/
/*
//objects
const student={
    firstName:"Karthik",
    lastName:"Goud",
    dob:2005,
    address:{
        town:"Thallapally",
        city:"Siddipet",
    },
    friends:["Ashish","Venkat","Gopi"],
    greetings:function(){
        console.log("Welcome to object methods");
    },
    calAge(){
        return 2025 - this.dob;
    },
};
//1.dot notation
console.log(student.firstName);
//2.bracket
console.log(student["lastName"]);
console.log(student.friends[student.friends.length-1]);
console.log(student.friends[1]);
//modifying
student.dob=2006;
console.log(student);
//adding
student["job"]="Lord commander";
console.log(student);
delete student.friends;
console.log(student);
student.greetings();
console.log(student.calAge());
*/
/*
//Sets
const a={};
console.log(typeof a); 
//to create set
const element=new Set();
console.log(typeof element);
element.add(10);
element.add(20);
element.add(10);
element.add(30);
element.add(20);
console.log(element);
//to delete elements
element.delete(20);
console.log(element);
//to check whether element is present or not
console.log(element.has(20));
console.log(element.has(30));
//to know how many element are present
console.log(element.size);
//to remove all elements
element.clear();
console.log(element);
*/
/*
document.title="DOM Operations";
document.body.style.backgroundColor="aqua";
const main=document.getElementById("main");
console.log(main);
main.style.backgroundColor="orange";
main.style.textAlign="center";
main.style.color="white";
const lang=document.getElementsByClassName("lang");
console.log(lang);
lang[lang.length-1].style.backgroundColor="chocolate" //for styling single element                 
for(const i of lang){
    i.style.backgroundColor="chocolate"
}
// lang.forEach((ele) => {
//     textTransform="uppercase"
// });
Array.from(lang).forEach((ele)=>{
    ele.style.textTransform="uppercase";
});
const h4Element=document.getElementsByTagName("h4");
console.log(h4Element);
h4Element[1].style.backgroundColor="grey";
for(const i of h4Element){
    i.style.backgroundColor="white";
}
// const ulElement=document.getElementsByTagName("ul");
// for(const i of ulElement){
//     i.style.backgroundColor="brown";
// }
*/
/*
const population=[100,200,300,400,500];
for(let i=0;i<population.length;i++){
    document.writeln(`${population[i]} is present at index: ${i}<br>`);
}

for(const i in population){
    document.writeln(`${population[i]} is present at index: ${i}<br>`);
}

for(const i of population){
    document.writeln(i,"<br>")
}
population.forEach((element,index)=>{
    document.writeln(`${element} is present at index: ${index}<br>`);
})*/
/*
const ulElement=document.querySelector("ul");
console.log(ulElement);
ulElement.style.listStyle="none";
for(const i of ulElement){
    i.backgroundColor="brown";
}
ulElement.forEach((ele)=>(ele.style.backgroundColor="yellow"));
*/
/*
const fe=document.getElementById("fe");
console.log(fe);
fe.firstElementChild.style.backgroundColor="red";
const be=document.getElementById("be");
be.lastElementChild.style.backgroundColor="green";
const b=document.querySelector("#be");
b.firstElementChild.style.textAlign="center";
//siblings
const html=document.querySelector(".h");
html.nextElementSibling.style.backgroundColor="violet";
const go=document.querySelector(".g");
go.previousElementSibling.style.backgroundColor="cyan";
const py=document.querySelector(".py");
py.parentElement.style.backgroundColor="lightgreen";
const c=document.querySelector(".c");
c.parentElement.style.backgroundColor="yellow";
const children=be.children;
console.log(children);
for(const ele of children){
    ele.style.fontSize="70px";
}*/
/*
//adding tag and content from js to html
const h1=document.getElementById("main");
console.log(h1);
h1.textContent="This JS";
const p=document.querySelector("p");
p.textContent="<i>This is a p tag</i>";
const h2=document.querySelector("h2");
h2.innerHTML="<i>This is a h2 tag</i>";
//read the content
console.log(h1.textContent);
console.log(p.textContent);
const h3=document.querySelector("h3");
h3.innerText="This is a h3 tag";
console.log(h3.innerText);*/

/*
//to create element
const h1=document.createElement("h1");
console.log(h1);
h1.setAttribute("class","main");
console.log(h1);
h1.style.fontSize="100px";
//adding content
h1.textContent="Welcome to JS";
document.body.append(h1);
//adding image
const img=document.createElement("img");
img.setAttribute("src","jon2.jpg");
img.setAttribute("alt","Jon snow")
document.body.append(img);
const container=document.querySelector("container");
container.appendChild(img);
*/