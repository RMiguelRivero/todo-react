import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './app-header.css';

const AppHeader = ({history}) => (
    <header>
        <div className="header-title" onClick={() => history.push('/')}>
            <span>Learning React</span>
        </div>
        <div className="header-links">
            <NavLink to="/about" activeClassName="is-active">About</NavLink>
        </div>
    </header>
);

export default withRouter(AppHeader);
