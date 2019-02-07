import React, { Component } from 'react';

const greetingStyle = {
    height: '15vh',
};

class Greeting extends Component {
    render() {
        return (
            <div style={greetingStyle}>
                <h1> {this.props.message} </h1>
            </div>
        );
    }
}

export default Greeting;
