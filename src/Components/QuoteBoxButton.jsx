import React from 'react'

const QuoteBoxButton = ({randomQuote, randomColor, getRandomAll}) => {
  return (
    <button className='button' onClick={getRandomAll} style={{backgroundColor: randomColor, color:'white'}}>&#62;</button>
  )
}

export default QuoteBoxButton