/*
//events
const btn=document.getElementById("btn");
console.log(btn);
function btnEvent(){
    document.body.style.backgroundColor="orangered"
    btn.style.backgroundColor="blue";
    btn.textContent="🚘";
}
btn.addEventListener("click",btnEvent);
btn.addEventListener("dblclick",()=>{
    btn.textContent="double click";
});
const span=document.querySelector("span");
console.log(span);
span.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor="green";
    event.target.style.fontSize="50px";
    console.log(span);
    span.textContent="REACT";
});
span.addEventListener("mouseout",(event)=>{
    span.textContent="REACT concept";
});
const key=document.querySelector("#key");
console.log(key);                                                                                  
key.addEventListener("keyup",(event)=>{
    event.target.style.backgroundColor="yellow";
    event.target.textContent=`the key you enter is ${event.key}`;
    console.log(event.target);
});
key.addEventListener("keydown",(event)=>{
    event.target.style.backgroundColor="grey";
    event.target.textContent="keydown";
    console.log(event.target);
});
const input=document.querySelector(".input");
const inputBtn=document.getElementById("inputbutton");
inputBtn.addEventListener("click",()=>console.log(input.value));
input.addEventListener("input",()=>console.log(input.value));
*/

/*
//for increment and decrement
const value=document.querySelector(".value");
const increment=document.getElementById("in");
const reset=document.getElementById("res");
const decrement=document.getElementById("de");
let count=0;
increment.addEventListener("click",()=>{
    count++;
    value.textContent=count;
});
decrement.addEventListener("click",()=>{
    count--;
    value.textContent=count;
});
reset.addEventListener("click",()=>{
    count=0;
    value.textContent=count;
})*/
/*
const js="javascript";
console.log(js[1]);
console.log(js[js.length-1]);
//updating values by using index
js[0]="J";
console.log(js);
//methods
console.log(js.length);
console.log(js.indexOf("s"));
console.log(js.lastIndexOf("a"));
console.log(js.includes("v"));
console.log(js.at("-1"));
console.log(js.toUpperCase());
console.log(js.toLowerCase());
console.log(js.slice(4,7));
console.log(js.split());//to convert string to array
const s="   js    "
console.log(s.trimStart());
console.log(s.trimEnd());
console.log(s.trim());
const newS=s.replace("j","J");
console.log(newS);
console.log(js.replaceAll("javascript","React"));
*/
/*
let num=[10,20,30,40];
const a=num[0];
const b=num[1];
const c=num[2];
const d=num[num.length-1]; //num.at(-1)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
//[]=to perform destructuring
const [p,q,r,s]=num;
console.log(p);
console.log(q);
console.log(r);
console.log(s);
//to skip any value we have to use ,
const [x,,y,z]=num; //to skip second value
console.log(x);
console.log(y);
console.log(z);

const lang=["javascript","java","python"];
const [js,,py]=lang;
console.log(js);
console.log(py);
//swaping to two variables without help of 3rd variable
//with 3rd variable   
let a1=10;
let b1=20;
// let temp=b1;
// b1=a1;
// a1=temp;
console.log(a1);
console.log(b1);
 //with destructuring
[a1,b1]=[b1,a1];
console.log(a1);
console.log(b1); 
//nested destructuring
const lan=["html","css",["js","python"]];
const [ht,,[,pyt]]=lan;
console.log(ht);
console.log(pyt);  

 const dept=["cse","ece",["mech","it"],"AI"];
 const [cs,,[,i],ai]=dept;
 console.log(cs);
 console.log(i);
 console.log(ai);
 //objects
 const student={
    firstName:"Karthik",
    lastName:"Goud",
    isMarried:false                                                                                                                                     ,
    job:false,
 };
 //destructuring objects
 const {firstName,isMarried}=student;
 console.log(firstName);
 console.log(isMarried);
 //variables is different property name(key name)
 const {firstName:surname,lastName:name,isMarried:status,job:jobStatus}=student;
 console.log(surname,name,status,jobStatus );

 //using destructuring of objects for functions
 const fullName=(student)=>{
    console.log(student.firstName + student["lastName"]);
};
fullName(student);
//using destructuring
const fname=({firstName,lastName})=>{
    console.log(firstName +lastName);
};
fname(student);

const marriedStatus=({isMarried})=>{
    if(isMarried){
        console.log("married");
    }else{
       console.log("not married");                
    }
}
marriedStatus(student);
*/

const n1=[10,20];
const n2=["Sunny",true];
//copy of array
const newN1=[...n1];
console.log("copy of n1 array:",newN1);
//combining multiple arrays
const n=[...n1,...n2,...n1,...n2];
console.log(n);
//using spread for arguments
const display=(m,n)=>{
    console.log(m,n);  
}
display(...n);


const person={
    firstName:"Karthik",
    lastName:"Goud",
    study:"b.tech",
    fullName:function(){
        console.log(this.firstName+this.lastName);
    },
    //latest way
    name(){
        console.log(this.firstName+this.lastName);
    },
}
person.fullName();
person.name();

//copy object
const student={...person};
console.log(student);
//Rest is used to collect multiple values into an array
const lang=["python","js","java","c++"];
console.log(lang);
const [py,j,...c]=lang;
console.log(py);
console.log(j);
console.log(c);




