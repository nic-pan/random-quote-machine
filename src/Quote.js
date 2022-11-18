import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function Quote ({text, author}) {
    return (
        <div>
            <p id="text">
                <FontAwesomeIcon icon={faQuoteLeft}/>
                {text}
                <FontAwesomeIcon icon={faQuoteRight}/></p>
            <p id="author" className="float-end">- {author}</p>
        </div>
    )
}
export default Quote;