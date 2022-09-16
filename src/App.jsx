import { useState } from 'react'
import quotes from "./json/quotes.json"
import './App.css'
import QuoteBox from './Components/QuoteBox';
import color from './Colors/color';

function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor: randomColor
  }

  const getRandomAll = () => {
    setRandomColor (color[getIndexRandom(color)])
    setRandomQuote (quotes[getIndexRandom(quotes)])
  }

  return (
    <div style={backgroundObject} className="App">
        <QuoteBox 
        randomQuote={randomQuote} 
        randomColor = {randomColor} 
        getRandomAll = {getRandomAll}
        />
    </div>
  )
}

export default App
