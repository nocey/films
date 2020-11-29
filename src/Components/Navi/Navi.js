import React from 'react'
import "./Navi.css"
import Search from "./Search/Search"

export default function Navi() {
    return (
        <div id = "navi">
            <h1 className="header">Nocey Film List</h1>
            <ul className="nav">
                <li className="btn">
                    Home
                </li>
                <li className="btn">
                    Film List
                </li>
                <li className="btn">
                    About
                </li>
                <li className="search">
                    <Search></Search>
                </li>
            </ul>
        </div>
    )
}
