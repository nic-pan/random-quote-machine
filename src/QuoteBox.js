import React, { useState } from "react";
import Quote from "./Quote";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

const QuoteBox = ({quotes}) => {   
    const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

    const [currentQuote, setCurrentQuote] = useState(getQuote())

    const newQuote = () => setCurrentQuote(()=>getQuote())

    return (
        <div id="quote-box" className="p-4" style={{width: '500px', border: '1px solid black'}}>
            <Quote text={currentQuote?.quote} author={currentQuote?.author}/>
            <div className="">
                <a className="btn" href={`https://twitter.com/intent/tweet?text=${currentQuote?.quote}`} id="tweet-quote">
                    <FontAwesomeIcon icon={faHashtag}/>
                </a>
                {/* <a className="btn" href="https://tumblr.com" id="tumblr">share</a> */}
            </div>
            <div className="">
                <button id="new-quote" className="btn" onClick={newQuote}>New Quote</button>
            </div>
        </div>
    )
}

export default QuoteBox;