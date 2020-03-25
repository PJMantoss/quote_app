import React from 'react'

export default function Button({ onClick, title }) {
    return (
            <button className='button' onClick={onClick} id="new-quote">
                {title}
            </button>
    )
}
