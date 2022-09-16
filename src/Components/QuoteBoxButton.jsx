import React from 'react'

const QuoteBoxButton = ({randomQuote, randomColor, getRandomAll}) => {
  return (
    <button className='button' onClick={getRandomAll} style={{color: randomColor}}>&#62;</button>
  )
}

export default QuoteBoxButton