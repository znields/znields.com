import React, { Component } from 'react';
import facebook from "../assets/facebook.png";
import Emoji from "./Emoji";
import { Keyframes} from "react-spring/renderprops";

const messageStyle = {
    height: '40vh',
    maxWidth: '720px',
};

const EarthContainer = Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next, cancel, ownProps) => {
        await next({ transform: 'rotate(0deg)', config: { easing: t => t, duration: 0 }});
        await next({ transform: 'rotate(1080000deg)', config: { easing: t => t, duration: 100000000 }});
    }
});

const EarthSpin = Keyframes.Spring({
    show: { opacity: 1 },
    spin: async (next, cancel, ownProps) => {
        await next({ transform: 'rotate(0deg)', config: { easing: t => t, duration: 0 }});
        await next({ transform: 'rotate(39420000deg)', config: { easing: t => t, duration: 100000000 }});
    }
});


class Introduction extends Component {
    
    render() {

        return (
            <div style={messageStyle}>
                <h1>
                    I'm <b>Isaiah Nields</b>, a computer science student with expertise in <b>machine learning</b>.
                    I'll be a Software Engineer Intern at Facebook for Summer 2019.&nbsp;
                    <Emoji onClick={this.onSunClick} symbol="☀️"/>
                    <EarthContainer state="spin">
                        { props => <span style={{...props, paddingLeft: '100px', position: 'absolute', zIndex: -10, transformOrigin: 'bottom left'}} >
                            <EarthSpin state="spin">
                                { props => <Emoji style={{...props, fontSize: 20}} symbol="🌎" /> }
                            </EarthSpin>
                        </span> }

                    </EarthContainer>

                </h1>
            </div>
        );
    }
}

export default Introduction;
