import Card from "./components/Card"
import "./App.css"
import { useState } from "react"

import ABCDEF, {BlueButton} from "./components/Buttons.jsx"

function App() {

  const [movies, setMovies] = useState([
    {
      "Title": "Harry Potter",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
      "Title": "Harry Potter and the Sorcerer's Stone",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    },
    {
      "Title": "Harry Potter and the Chamber of Secrets",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"
    }
  ])

  function fetchMovies(movieName) {
    fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=1b4ecd2`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      .catch(err => console.log(err))
  }

  const [query,setQuery] = useState("")

  return (
    <div>
        <ABCDEF text="Hello" />
        <BlueButton text="hello" />
      <input onChange={(e) => setQuery(e.currentTarget.value)} type="text" placeholder="Enter Movie Name" />
      <button onClick={() => fetchMovies(query)}>Fetch Movies</button>
      
      <div className="grid">
        {movies.map((item, index) => {
          return <Card image={item.Poster} name={item.Title} />
        })}
      </div>
    </div>
  )
}
export default App
