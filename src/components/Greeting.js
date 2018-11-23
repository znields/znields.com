import React, { Component } from 'react';

const messageStyle = {
    margin: 0,
    paddingTop: '10vh',
    paddingLeft: '10vh'
};

class Greeting extends Component {
    render() {
        return (
            <div>
                <h1 style={messageStyle}> {this.props.message} </h1>
            </div>
        );
    }
}

export default Greeting;
