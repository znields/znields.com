import React, { Component } from 'react';
import { Keyframes, config } from 'react-spring/renderprops';
import Emoji from "./Emoji";

const greetingStyle = {
    height: '15vh',
    fontSize: 35
};


const Container = Keyframes.Spring({
    show: { opacity: 1 },
    wave: async (next, cancel, ownProps) => {
        await next({ transform: 'rotate(0deg)', config: config.gentle });
        await next({ transform: 'rotate(40deg)', config: { easing: t => t, duration: 100 }});
        await next({ transform: 'rotate(-40deg)', config: { easing: t => t, duration: 200 }});
        await next({ transform: 'rotate(40deg)', config: { easing: t => t, duration: 200 }});
        await next({ transform: 'rotate(-40deg)', config: { easing: t => t, duration: 200 }});
        await next({ transform: 'rotate(0deg)',  config: { easing: t => t, duration: 100 }});
        ownProps.onRest();
    }
});

class Greeting extends Component {

    state = {
        animateWave: true
    };

    onClickWave = () => {
        this.setState({ ...this.state, animateWave: true });
    };

    onEndWave = () => {
        this.setState({ ...this.state, animateWave: false });
    };

    render() {

        const { animateWave } = this.state;

        return (
            <div style={greetingStyle}>
                Hello!&nbsp;
                <Container
                    state={animateWave ? 'wave': 'show'}
                    onRest={this.onEndWave}>
                        {props => <Emoji onClick={this.onClickWave} symbol="👋" style={props} label="wave"/>}
                </Container>
            </div>
        );
    }
}

export default Greeting;
