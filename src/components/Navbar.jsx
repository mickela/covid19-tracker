import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="text-center m-auto">
                    <ul className="navbar-nav m-auto">      
                        <li className="nav-item">
                            <a className="navbar-brand" href="#2" style={{ cursor: 'default' }}>
                                <img src="logo-color-sm.png" className="logo" alt="#theVirus" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}