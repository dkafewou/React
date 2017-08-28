import React from 'react';

export class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">NavigationBar</a>

                <div className="my-2 my-lg-0">
                    <a href="./register.html" className="mr-sm-2 btn btn-outline-primary btn-sm" role="button" aria-pressed="true">REGISTER</a>
                    <a href="./login.html" className="mr-sm-2 btn btn-outline-primary btn-sm" role="button" aria-pressed="true">LOGIN</a>
                </div>
            </nav>
        );
    }
}
