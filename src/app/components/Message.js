import React from 'react';
import PropTypes from 'prop-types';

export class Message extends React.Component {
    render() {
        return(
            <div className="alert alert-primary" role="alert">
                <p>{this.props.alertMessage}</p>
            </div>
        );
    }
}

Message.propTypes = {
    alertMessage: PropTypes.string
};
