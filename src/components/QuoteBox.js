import React from 'react';

export default function QuoteBox({quote, author}) {
    return (
        <div>
            <React.Fragment>
                <div id="text"><p>{quote}</p></div>
                <div id="author"><h5>{author}</h5></div>
            </React.Fragment>
        </div>
    )
}
