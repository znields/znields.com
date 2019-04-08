import React, { Component } from 'react';
import facebook from "../assets/facebook.png";
import Emoji from "./Emoji";

const messageStyle = {
    height: '40vh',
    maxWidth: '720px',
};

class Introduction extends Component {
    render() {
        return (
            <div style={messageStyle}>
                <h1>
                    I'm <b>Isaiah Nields</b>, a computer science student with expertise in <b>machine learning</b>.
                    I'll be a Software Engineer Intern at <img style={{width: 40}} src={facebook} alt='facebook' /> for Summer 2019.
                    
                    <Emoji symbol="☀️"/>
                </h1>
            </div>
        );
    }
}

export default Introduction;
