import React  from 'react'
const Link = require("react-router-dom").Link

export type NavitemProps = {
    title:string,
    url:string,

}

export function Navitem({title, url, } : NavitemProps) {
    return (
            <li className='nav-item' >
                <Link to={url}>{title}</Link>
            </li>
    )
}
