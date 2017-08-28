import React from 'react';
import { render } from 'react-dom';
import './App.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { NavigationBar } from "./components/NavigationBar";
import { LoginForm } from "./components/LoginForm";


class Login extends React.Component {
    render() {
        return(
            <div className="App">
                <NavigationBar/>

                <div className="App-form container-fluid justify-content-center">
                    <div className="row">
                        <div className="col-md-8">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
render(<Login/>, window.document.getElementById("login"));
registerServiceWorker();

