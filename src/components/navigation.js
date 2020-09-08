import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <Fragment>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li></li>
                <li></li>
            </ul>
        </Fragment>
    );
};

export default Nav;