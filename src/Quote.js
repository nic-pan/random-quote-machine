import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function Quote ({text, author}) {
    return (
        <div className="d-flex flex-column">
            <div className="position-relative pb-3">
                <div className="position-absolute top-0 start-0 translate-middle">
                    <FontAwesomeIcon icon={faQuoteLeft} size="2x"/>
                </div>
                <p className="m-4" id="text" style={{fontFamily: 'Marhey', fontSize: '40px'}}>
                    {text}
                </p>
                <div className="position-absolute bottom-0 end-0">
                    <FontAwesomeIcon icon={faQuoteRight} size="2x"/>
                </div>
            </div>
            <div className="d-flex flex-row-reverse">
                <p id="author" style={{fontFamily: 'M PLUS Rounded 1c', fontSize: '20px'}}>- {author}</p>
            </div>
        </div>
    )
}
export default Quote;