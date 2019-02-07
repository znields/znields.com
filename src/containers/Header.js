import React, { Component } from 'react';
import Greeting from '../components/Greeting';
import Introduction from "../components/Introduction";
import Contact from "../components/Contact";
import './Header.css';
import Emoji from "../components/Emoji";

class Header extends Component {

    render() {
        const introduction = "a software engineer with interests in design, web development, and data science";
        return (
            <header>
                <Greeting message={<span>Hello! <Emoji symbol="👋" label="point-right"/></span>}/>
                <Introduction name={"Isaiah Nields"} message={introduction}/>
                <Contact email={"imnields@gmail.com"}/>
            </header>
        );
    }
}

export default Header;
