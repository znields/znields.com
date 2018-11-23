import React, { Component } from 'react';
import Greeting from '../components/Greeting';

const headerStyle = {
    height: '100vh',
};
class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <Greeting message={"Hello!"}/>
            </header>
        );
    }
}

export default Header;
