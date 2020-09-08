import React, { Fragment } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';


const Nav = (props) => {

    const { history, location, match } = props;

    return (
        <Fragment>
            <button
                onClick={ () => history.push('./settings') }
            >
                Go to Settings
            </button>

            <button
                onClick={ () => history.goBack() }
            >
                Go back
            </button>

            <button
                onClick={ () => history.goForward() }
            >
                Go forward
            </button>

            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/reports">Reports</Link>
                </li>
                <li>
                    <Link to="/reports/123">Reports ID</Link>
                </li>
            </ul>

            {/* {Redireccionar: Se puede usar junto a una condicion para redireccionar usando un booleano} */}
            { false && <Redirect to="test" />}
        </Fragment>
    );
};

export default withRouter(Nav);