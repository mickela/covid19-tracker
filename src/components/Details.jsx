import React from 'react';
import { Link } from 'react-router-dom';

function Details() {
    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-header text-center">
                    <Link to="/">Back</Link>
                    <span className="">Country</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#2" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
    )
}

export default Details
