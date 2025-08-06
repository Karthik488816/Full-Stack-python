/*
const jokeApi=()=>{
    fetch("https://v2.jokeapi.dev/joke/Programming")
    .then((response)=>response.json())
    .then((data)=>console.log(data));  
    
};
jokeApi();

const jokeApi1=async()=>{
    const response=await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data=await response.json();
    console.log(data);
    joke.textContent=data.joke||data.setup;
};
jokeApi1();

const joke=document.getElementById("joke");
const btnjk=document.querySelector(".btn-jk");
btnjk.addEventListener("click",jokeApi1);


const tableApi=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    console.log(res);
    
    const data=await res.json();
    console.log(data);
    data.forEach((element)=> {
        const tr=document.createElement("tr");
        tr.innerHTML=`<td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.body}</td>`;
        tableBody.appendChild(tr);
    });  
};
const tableBody=document.querySelector(".t-body");
tableApi();
*/
const productApi=async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    console.log(res);
    const data=await res.json();
    console.log(data);
    data.forEach((element) => {
        const div=document.createElement("div");
        div.innerHTML=`
        <p>${element.id}</p>
        <p>${element.title}</p>
        <p>${element.price}</p>
        <p>${element.description}</p>`
    });    
}
const product=document.querySelector(".product_item")
productApi();

const fakeApi