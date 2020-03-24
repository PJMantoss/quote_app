import React from 'react'

export default function Button({ onClick, title }) {
    return (
            <button className='button' id="new-quote" onClick={onClick}>
                {title}
            </button>
    )
}
