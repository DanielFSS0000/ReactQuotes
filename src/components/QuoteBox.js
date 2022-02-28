import React, { useState } from 'react';
import { NextBtn } from './NextBtn';
import quotes from '../quotes.json';

export const QuoteBox = () => {

    const getRandomQuote = ()=> Math.floor(Math.random() * quotes.length)

    const getRandomColor = () => (Math.random() * 0xffffff * 1000000).toString(16);
    const [ rQuote, setRQuote ] = useState( quotes[getRandomQuote()] );

    const changeQuote = ()=>{
        setRQuote(quotes[getRandomQuote()])
    }

    const color = getRandomColor().slice(0,6);

    return (
    <div className='container' style={{backgroundColor: `#${color}`, color: `#${color}`}}>    
        <section className='blockquote'>
            <header>
                <i className="fa-solid fa-quote-left"></i>
                <p>{rQuote.quote}</p>
                <i className="fa fa-quote-right"></i>
            </header>

            <p>-
                <i>  {rQuote.author}</i></p>

            <NextBtn random={changeQuote} bg={`#${color}`}/>
        </section>
    </div>
    );
};
export default QuoteBox;
