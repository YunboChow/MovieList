import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Min filmlista</h1>
      <h2>Lägg till en film</h2>
      <MovieList></MovieList>
      

    </>
  )
}

export default App
