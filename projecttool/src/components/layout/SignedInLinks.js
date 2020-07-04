import React from 'react'
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating orange darken-2">PK</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;