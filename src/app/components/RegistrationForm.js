import React from 'react';
import PropTypes from 'prop-types';

import { Message } from "./Message";
import { UserList } from "./UserList";
import {User} from "../models/User"

export class RegistrationForm extends React.Component {
    constructor(props){
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            username:'',
            password:'',
            userItems:[
                {username: "Afewou", password: "test010"},
                {username: "Kodjo", password: "merci1422"}
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

        this.setState({ alert: true ,
            message:"Well! You are now registered"
        });
        const {userItems} = this.state.userItems;

        this.setState({
            userItems:[...this.state.userItems,new User(this.state.username,
                    this.state.password)],
        });

        this.state.username='';
        this.state.password='';

        event.preventDefault();

    }
    render() {
        const {userItems} = this.state;
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                {this.state.alert? <Message alertMessage={this.state.message}/> : null}
                <div className="card">
                    <div className="card-header">
                        <div className="text-center">
                            Register
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
                            <button type="submit" className="btn btn-primary btn-sm"> Register</button>
                        </div>
                    </div>
                </div>
            </form>
                <div className="col-md-6">
                    <UserList listusers={userItems}/>
                </div>
            </div>
        );
    }
}
