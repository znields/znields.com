import React, { Component } from 'react';
import facebook from "../assets/facebook.png";
import Emoji from "./Emoji";
import {config, Keyframes} from "react-spring/renderprops";

const messageStyle = {
    height: '40vh',
    maxWidth: '720px',
};

const Container = Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next, cancel, ownProps) => {
        await next({ transform: 'rotate(0deg)', config: { easing: t => t, duration: 1000 }});
        await next({ transform: 'rotate(1080deg)', config: { easing: t => t, duration: 1000 }});
        ownProps.onRest();
    }
});

class Introduction extends Component {

    state = { sunAnimation: false };

    onSunClick = () => {
        this.setState({ ...this.state, sunAnimation: true });
    };


    onSunEnd = () => {
        this.setState({ ...this.state, sunAnimation: false });
    };


    render() {

        const { sunAnimation } = this.state;

        return (
            <div style={messageStyle}>
                <h1>
                    I'm <b>Isaiah Nields</b>, a computer science student with expertise in <b>machine learning</b>.
                    I'll be a Software Engineer Intern at &nbsp;<img style={{width: 40}} src={facebook} alt='facebook' />&nbsp; for Summer 2019.&nbsp;

                    <Container state={sunAnimation ? "spin": "show"} onRest={this.onSunEnd}>
                        { props => <Emoji style={props} onClick={this.onSunClick} symbol="☀️"/> }
                    </Container>
                </h1>
            </div>
        );
    }
}

export default Introduction;
