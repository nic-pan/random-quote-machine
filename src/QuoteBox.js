import React, { useState } from "react";
import Quote from "./Quote";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import gradients from "./gradients";

const QuoteBox = ({quotes}) => {   
    const changeColors = () => {
        const gradient = gradients[Math.floor(Math.random() * gradients.length)];
        const bgStyle = `linear-gradient(${gradient.deg}deg, ${gradient.colors.join(', ')})`;
        console.log(bgStyle)
        console.log(document.body)
        document.body.style.setProperty('background', bgStyle)
    }
    const getQuote = () => {
        changeColors();
        return quotes[Math.floor(Math.random() * quotes.length)]
    }

    const [currentQuote, setCurrentQuote] = useState(getQuote())

    const newQuote = () => {
        setCurrentQuote(()=>getQuote())
    }


    return (
        <div id="quote-box" className="p-5" style={{width: 'auto', maxWidth: "700px", border: '1px solid black', boxShadow: '10px 10px', backgroundColor: '#fff'}}>
            <Quote text={currentQuote?.quote} author={currentQuote?.author}/>
            <div className="d-block">
                <div className="d-flex justify-content-between">
                    <div>
                        <a className="btn" href={`https://twitter.com/intent/tweet?text=${currentQuote?.quote}`} id="tweet-quote">
                            <FontAwesomeIcon icon={faHashtag}/>
                        </a>
                        {/* <a className="btn" href="https://tumblr.com" id="tumblr">share</a> */}
                    </div>
                    <div>
                        <button id="new-quote" className="btn" onClick={newQuote}>New Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteBox;