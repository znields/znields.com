import React, { Component } from 'react';
import Greeting from '../components/Greeting';
import Introduction from "../components/Introduction";
import Contact from "../components/Contact";



const headerStyle = {
    padding: "10vh 10vw",
    height: "100vh",
    boxSizing: "border-box"
};


class Header extends Component {

    state = {
        animateWave: false,

    };

    render() {

        return (
            <div>
                <header style={headerStyle}>
                    <Greeting/>
                    <Introduction/>
                    <Contact email="imnields@gmail.com"/>
                </header>
            </div>
        );
    }
}

export default Header;
