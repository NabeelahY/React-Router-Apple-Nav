import React from 'react'

export default function Nav({url, text}) {
    return (
        <a href={url}>{text}</a>
    )
}
