/*
import React from "react";

const App=()=>{
  const h1=React.createElement("h1",{style:{color:"red"}},"Welcome to React");
  const p=React.createElement("p",null,"Hi, I am karthik");
  return(
    <div>{h1} {p} </div>
  )
};
export default App;
*/

/*
import React from "react";
import Stu from "./Student";
import Training from "./Training"; 
const App=()=>{
  return(
    <div>
      <Stu name="Karthik" course="CSE"></Stu>
      <Stu name="Sunny"/>     
      <Training course="Python FullStack"/>
       <Training course="Java FullStack" />
    </div>
  )
}
export default App;
*/

/*
import React from "react";
import Project from "./Project";
const data1={
  image:"https://www.linflux.com/wp-content/uploads/2018/10/18679295525_f39cc1bc70_z-400x400.jpg",
  title:"Game Of Thrones",
  description:"Game of Thrones is an epic fantasy television series based on George R.R. Martin’s *A Song of Ice and Fire* novels. Set in the fictional continents of Westeros and Essos, it follows the deadly political struggles among noble families vying for control of the Iron Throne. Known for its complex characters, intricate plots, and shocking twists, the series blends medieval warfare, betrayal, and dark magic. Key houses like the Starks, Lannisters, and Targaryens play central roles in the power battles, while a looming supernatural threat—the White Walkers—challenges the very survival of humanity. The series explores themes of power, loyalty, and destiny",
  price:"$750"
}
const data2={
  image:"https://images4.alphacoders.com/136/1360751.jpeg",
  title:"House of Dragon",
  description:"*House of the Dragon* is a fantasy television series and a prequel to *Game of Thrones*, based on George R.R. Martin's book *Fire & Blood*. Set nearly 200 years before the events of *Game of Thrones*, it focuses on House Targaryen at the height of its power in Westeros. The series chronicles the lead-up to and aftermath of the Targaryen civil war known as the Dance of the Dragons—a brutal conflict over succession that pits family members against each other. Filled with political intrigue, betrayal, and fiery dragon battles, *House of the Dragon* explores the fragility of dynastic rule and the devastating cost of ambition and pride within the most powerful house in Westeros",
  price:"$650"
}
const data3={
  image:"https://resizing.flixster.com/qeGRjEC1edJQu8dLViQ1BXLeZos=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNzkzLndlYnA=",
  title:"Breaking Bad",
  description:"**Breaking Bad** is a critically acclaimed American TV series that follows Walter White, a high school chemistry teacher who turns to cooking methamphetamine after being diagnosed with terminal cancer. As he partners with former student Jesse Pinkman, Walter transforms from a mild-mannered teacher into a ruthless drug kingpin. The show explores themes of morality, identity, and the consequences of choices, and is known for its intense storytelling, complex characters, and dramatic twists.",
  price:"$500"
}
const App=()=>{
  return(<div><h1>Web Series</h1>
    
    <div style={{ display: "flex",flexDirection: "row",  // Ensures horizontal layout
        justifyContent: "center",
        gap: "10px",
        padding: "20px",
        flexWrap: "nowrap", // prevents wrapping
      }}
    >
      <Project data={data1}/>
      <Project data={data2}/>
      <Project data={data3}/>
    </div></div>
  );
};
export default App;
*/

// import Student from "./Student";
// const StudentData=[{
//   name:"Karthik",
//   course:"CSE",
//   yearOfJoining:2023,
//   yearOfPassOut:2027,
// },
// {
//   name:"Sunny",
//   course:"CSM",
//   yearOfJoining:2024,
//   yearOfPassOut:2028,
// }]
// function App(){
//   return(
//     <div>
//       {/* <Student StudentData={StudentData}  /> */}
//       {/* without mapfunction */}
//       <Student StudentData={StudentData[0]}  />
//       <Student StudentData={StudentData.at(-1)}  />
//       {/* with map function */}
//       {StudentData.map((student)=>(
//         <Student StudentData={student} key={student.name} />
//       ))}
//       </div>
//   )
// }
// export default App;


import Product from "./Product";
const Products = [
  { name: "Laptop", price: 250 },
  { name: "Mobile", price: 200 },
  { name: "Earphones", price: 50 }
];

function App() {
  return (
    <div>
      {Products.map((product) => (
        <Product Products={product} key={product.name} />
      ))}
    </div>
  );
}
export default App;


/*
import Counter from "./counter";
const App=()=>{
   return <>
   <Counter/>
   </>
}
export default App;
*/

/*
import React from "react";
import Parent from './Parent'

const App = () => {
  return (
    <div>
      {<Parent name="Sunny"/>}
    </div>
  )
}
export default App
*/

/*
import React, { createContext } from 'react'
import Parent from './Parent';
import Child from './Child';
import Grandchild from './Grandchild';
export const nameContext=createContext();

function App() {
  const name="Sunny";
  
  return (
    <div>
      <Parent />
      <Child />
      {/* providing value phase }
      <nameContext.Provider value = {name}>
        <Grandchild />
        </nameContext.Provider >
    </div>
  )
}
export default App
*/
