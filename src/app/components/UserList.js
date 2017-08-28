import React from 'react';
import PropTypes from 'prop-types';

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            censored: true,
            type: "password",
        };
        this.handleDoubleClickPassword = this.handleDoubleClickPassword.bind(this);
    }
    handleDoubleClickPassword(event) {
        event.preventDefault();
        this.setState({ censored: true ,
            type:"text"
        });

    }
    render() {
        return(
            <div>
                <h2>List of users</h2>
                <form>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.listusers.map((user, i) =><tr key={i}>
                                <td>{user.username}</td>
                                <td><input type={this.state.type} value={user.password} readOnly={this.state.censored} onDoubleClick={this.handleDoubleClickPassword}/></td>
                            </tr>)}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

UserList.propTypes = {
    listusers: PropTypes.arrayOf(PropTypes.object)
};