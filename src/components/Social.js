import React from 'react'

export default function Social({quote, author}) {
    return (
        <React.Fragment>
            <a 
                href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`}
                target="_blank"
                title="Share this Quote on Twitter"
                id="tweet-quote"
            >
                <i className="fab fa-twitter twitter-icon"/>
            </a>
        </React.Fragment>
    )
}
