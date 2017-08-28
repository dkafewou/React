import React from 'react';
import { render } from 'react-dom';
import './App.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { NavigationBar } from "./components/NavigationBar";
import { RegistrationForm } from "./components/RegistrationForm";


class Register extends React.Component {
    render() {
        return(
            <div className="App">
                <NavigationBar/>

                <div className="App-form container-fluid justify-content-center">
                    <div className="row">
                        <div className="col-md-8">
                            <RegistrationForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<Register/>, window.document.getElementById("register"));
registerServiceWorker();

