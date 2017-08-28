import React from 'react';

import { Message } from "./Message";
import {User} from "../models/User"

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            username:'',
            password:'',
            userItems:[
                {username: "Firmin", password: "bonjour"},
                {username: "Desire", password: "merci"},
                {username: "Bobo", password: "48956"},
                {username: "SERIS", password: "1426SD"},
                {username: "ASGET", password: "ABC"},
                {username: "SDERF", password: "PEWR"},
                {username: "DBGCFRE", password: "PSHDE"},
                {username: "QSFER", password: "SDFER"},
                {username: "PSDER", password: "LSBCFER"},
                {username: "MSDERF", password: "POERDS"},
            ],
            alert: false,
            message: '',

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {


        const {userItems} = this.state.userItems;

        let check=false;


        this.state.userItems.forEach((user) => {
            if(user.username===this.state.username && user.password===this.state.password){
                this.setState({ alert: true ,
                    message:"Well! Login Success"
                });
                this.state.username='';
                this.state.password='';
                check = true;
            }
        });

      if (check===false){
            this.setState({ alert: true ,
                message:"Make sure to enter a valid username and password!"
            });
        }

        event.preventDefault();

    }
    render() {
        const {userItems} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                    {this.state.alert? <Message alertMessage={this.state.message}/> : null}
                    <div className="card">
                        <div className="card-header">
                            <div className="text-center">
                                Login
                            </div>
                        </div>
                        <div className="card-body mx-4">
                            <div className="form-group">
                                <label className="control-label" htmlFor="Inputusername">Username</label>
                                <input type="text" value={this.state.username}  className="form-control" id="InputUsername"
                                       placeholder="Username" onChange={this.handleUsernameChange} required/>
                            </div>

                            <div className="form-group">
                                <label className="control-label" htmlFor="InputPassword">Password</label>
                                <input type="password" value={this.state.password} className="form-control" id="InputPassword"
                                       placeholder="Password" onChange={this.handlePasswordChange} required/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-sm">Login</button>
                            </div>
                        </div>
                    </div>
            </form>
        );
    }
}
