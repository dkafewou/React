import React, { Component } from 'react'
import { UserList } from "./components/UserList";

class App extends Component {
    render() {
        let users = [
            {username: "Firmin", password: "bonjour"},
            {username: "Desire", password: "merci"}
        ];
        return (
            <div className="App">
                <div className="container">
                    <div className="row App-list">
                        <UserList listusers={users}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
