/*const App=()=>{
  return (
  <div>
    <Header />
    <Footer />
    <Header2 />
    <Footer2 />
  </div>
   );
}
const Header=function(){
  return <h1>Car showroom</h1>
};
const Footer=function(){
  return (<img src="https://images.stockcake.com/public/3/a/5/3a5e66db-283f-4359-9993-efec45ac26eb_large/luxury-car-showroom-stockcake.jpg" width={600} height={300}/>);
};
const Header2=function(){
  return <h1>Bike showroom</h1>
};
const Footer2=function(){
  return (<img src="https://www.ensileta.com/images/bike-showroom-interior-design-2.jpg"width={600} height={300}/>);
};
export default App;
*/
import React from "react";
// const App=()=>{
//   const h1=React.createElement("h1",{id:"main"},"Hello World");
//   return h1;
// }
// export default App;

/*
import Head from "./Header";
import {Footer} from "./Header"
import {Mid} from "./Header"
const App=()=>{
  return(
    <div>
      <Head/>
      <h1>Iron Throne</h1>
      <IronThrone />
      <IronThrone />
      <IronThrone />
      <IronThrone />
      <Footer/>
      <Mid/>
    </div>
    
  );
};
const IronThrone=()=>{
  return(
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xFzb2QarMOdNsFCknhCiFgWEWtuQVZJKNXBtiWtXgBnnHCoHHTDObCVD1O3TMnqEKH4&usqp=CAU" alt="GOT"  />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xFzb2QarMOdNsFCknhCiFgWEWtuQVZJKNXBtiWtXgBnnHCoHHTDObCVD1O3TMnqEKH4&usqp=CAU" alt="GOT"  />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xFzb2QarMOdNsFCknhCiFgWEWtuQVZJKNXBtiWtXgBnnHCoHHTDObCVD1O3TMnqEKH4&usqp=CAU" alt="GOT"  />
      <p>Game of Thrones</p>
      <p>The Targaryen dynasty itself has a dramatic history full of civil wars and dragon-fueled politics. The Dance of the Dragons (129–131 AC) featured a bitter civil war between Aegon II and Rhaenyra that killed most dragons and devastated the realm 
SparkNotes TIME CBR. Later, the reign of King Aerys II—known as the Mad King—ended in rebellion and the overthrow of his regime, setting the stage for the events of Game of Thrones</p>
    </div>
  );
}

export default App;
*/

import Manga from "./manga";
const App=()=>{
  return(
    <div>
      <Manga/>
      <Manga/>
      <Manga/>
    </div>
  )
};
export default App;