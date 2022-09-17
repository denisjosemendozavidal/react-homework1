import React from 'react'
import QuoteBoxButton from './QuoteBoxButton'



const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {
    
    return (
        <article className='card'>
            <div className='quoteandquotations'>
                <i className="fa-solid fa-quote-left" style={{color: randomColor}}></i>
                <p className='card_quote' style={{color: randomColor}}>{`"${randomQuote.quote}"`}</p>
            </div>
            <h1 className='card_author' style={{color: randomColor}}>{randomQuote.author}</h1>
            <QuoteBoxButton
                randomQuote={randomQuote} 
                randomColor = {randomColor} 
                getRandomAll = {getRandomAll}
            />
            
        </article>
    )
}

export default QuoteBox