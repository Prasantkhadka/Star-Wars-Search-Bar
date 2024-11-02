//state: is a built-in React object that is used to contain data or information about the component. A component's state can change over time: whenever it changes, the component re-renders.

// import { useState } from "react";
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   //count is a actual data and setCount is function data that is going to be executed
//   const increment = () => {
//     setCount(count+1);
//   }
//   const decrement = () => {
//     setCount(count-1);
//   }
//   return <>
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>

//   </>
// }

//updating object values in state
// function App() {
//   const[movie, setMovies] = useState({
//     title: "12th Fail",
//     ratings: 9,
//   })

//   const addRatings = () => {
//   // //   // const copyMovie = {
//   // //   //   ...movie,
//   // //   //   ratings: 7
//     setMovies({...movie, ratings:7});
//   }
    
  
//   return (
//     <>
//       <h1>Movie Name: {movie.title}</h1>
//       <h2>Ratings: {movie.ratings}</h2>
//       <button onClick={addRatings}>Add ratings</button>
//     </>
//   );
// }

//updating arrays of object in State
// function App() {
//   const[movies, setMovie] = useState([
//     {id:1, title:"Spider man",ratings:7},
//     {id:2, title:"Superman",ratings:5},
//   ])

//   const handleClick =() => {
//     setMovie(movies.map((m) => (m.id === 1 ? {...movies, title:"John Wick 5"} :m))
//     );
//   }

//   return (
//     <>
//       {movies.map(movie => (
//         <li key={Math.random()}>{movie.title}</li>
//       ))}
//       <button onClick={handleClick}>Change name</button>
//     </>
//   )
// }

//forms in React, and use state
// function App() {
//   const [username, setUsername] = useState("");

//   const handleChange = (event) => {
//     setUsername(event.target.value);
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`You typed: ${username}`);
//     setUsername("");
//   }

//   return (
//     <>
//       <h1>Form Demo</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={handleChange} />
//         <button>Submit</button>
//       </form>
      
//     </>
//   );
// }

//useEffect hook: allows you to perform side effects(fetching data from other url) in your components. Some examples: fetching data, directly updating the DOM
// import { useEffect, useState } from "react";
// function App() {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     //async function allows you to work asynchronous operations(things that might take some time, like fetching data)
//     async function getData() {
//       //await keyword is used inside an async function to wait for a promise to finish. A promise is a way in JavaScript to handle operations that might take some time.
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//       //'await' pauses here until the data is fetched
//       const data = await response.json()
//       if(data && data.length) setData(data)
//     }

//     getData()
//   },[])
//   return <>
//     <ul>
//       {data.map(item => (
//         <li key={Math.random}>{item.title}</li>
//       ))}
//     </ul>
//   </>
// }

//useContext API: is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
// import { createContext } from "react"
// import ComponentC from "./ComponentC"

// export const Data = createContext();
// export const Data1 = createContext();

// function App () {
//   const name = "Prashant khadka"
//   const age = 27
//   return <>
//     <Data.Provider value={name}>
//       <Data1.Provider value={age}>
//         <ComponentC />
//       </Data1.Provider>
//     </Data.Provider>
    
//   </>
// }

//useReducer(): is a hook in react that is similar to useState, but is designed for more complex state objects that involve multiple sub-values. It allows you to manage state in a functional, immutable way.

//useRef(): is a hook in React that allows you to access the properties of a DOM element. It is useful when you need to access the value of an element, or the current dimensions of an element 
// import { useRef } from "react"
// function App() {
//   const inputElement = useRef(null)

//   const focusInput = () => {
//     inputElement.current.focus();
//     inputElement.current.value ="pk"
//   }

//   return <>
//     <input type="text" ref={inputElement} />
//     <button onClick={() => focusInput()}>Focus & Write something</button>
//   </>
// }

//search bar api
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Data from './all.json'

function App() {
  return <div className="Search">
    <SearchBar placeholder="Search Star Wars character" data={Data} />
  </div>
}

export default App 
