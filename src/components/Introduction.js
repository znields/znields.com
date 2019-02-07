import React, { Component } from 'react';

const messageStyle = {
    height: '40vh',
    maxWidth: '720px',
};

class Introduction extends Component {
    render() {
        return (
            <div style={messageStyle}>
                <h1> I'm <b>{this.props.name}</b>, {this.props.message} </h1>
            </div>
        );
    }
}

export default Introduction;
