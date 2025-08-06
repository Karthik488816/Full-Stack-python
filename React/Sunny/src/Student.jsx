/*const Student=({name})=>{   
    return <div><h1>{name}</h1>
    </div>
};
export default Student;
*/
const Student=({StudentData})=>{  
    //   if(StudentData.yearOfJoining===2023&&StudentData.yearOfPassOut===2027){
    //     return <h1>{StudentData.name} was passed with in time period </h1>;
    //   }else{
    //     return <h1>{StudentData.name} was not passed with in time period </h1>;
    //   }
    const result=StudentData.yearOfJoining===2023&&StudentData.yearOfPassOut===2027 ?  <h1>{StudentData.name} was passed with in time period </h1>:  <h1>{StudentData.name} was not passed with in time period </h1>;
    return result; //using ternary 
};
export default Student;