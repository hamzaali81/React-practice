import React from 'react';
import ReactDom, { render } from 'react-dom';
// import './index.css'
import './index.js';

// first react Component
//JSX rules
// return Single element
// div / section / article
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

// function Greetings(){
//   return <section className="container"><Book /><Book /><Book /></section>
// }

// // const Person=()=><h1>Hamza Ali</h1>;
// const Book  =()=>{
// return(
// <article className="containers">
// <CoverImage />
// <Title />
// <Author />
// </article>
// )
// }

// const CoverImage = ()=>(

//   <img src="https://images-na.ssl-images-amazon.com/images/I/817VE4lKPzL._AC_UL200_SR200,200_.jpg" alt="Amazon Book"/>
// )

// const Title= ()=><h1>White Fragility</h1>;
// const Author= ()=><p>Robin DiAngelo</p>;

// function Person(){
  //use js
//   const btn='search buuton';
//   return(
//     <section>
//       <button>{btn}</button>
//       <h2>john doe</h2>
//       <p>info</p>      
//     </section>
//   )
// }

//PROPS (PROPERTIES)=ARGUMENTS TO COMPONENTS
//function SayName(name){console.log(name);}






function People(){
  return(
    <section>
    <Person name="john" job="designer"/>
    <Person name="john" job="designer"/>
    <Person name="john" job="designer"/>
    </section>
  )
}

const Person=(props)=>{
  console.log(props);
return (
  <article>
  {/* <h1>Ali</h1>
  <p>developer</p> */}
  <h1>{props.name}</h1>
  <p>{props.job}</p>
  <hr/>
</article>
)
}

// const Person1=()=>{
//   return (
//     <article>
//     <h1>Ahmed</h1>
//     <p>UX</p>
//   </article>
//   )
//   }
ReactDom.render(<People />,document.getElementById("root"));