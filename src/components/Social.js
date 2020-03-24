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

            <a 
                href={`https://www.tumblr.com/widgets/share/tool?caption= ${quote} &content= ${author} &canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} 
                target="_blank" 
                title="Post this quote on tumblr!" 
                id="tumblr-quote"
            >
                <i class="fab fa-tumblr"></i>
            </a>
        </React.Fragment>
    )
}
