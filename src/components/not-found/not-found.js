import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.css';

const NotFound = () => (
    <div className="not-found">
        <p className="title"> Page Not Found</p>
        <p className="subtitle"> We're sorry, we couldn't find the page you requested.</p>
        <p>
            <Link to="/">Go Home</Link>
        </p>
    </div>
);

export default NotFound;
