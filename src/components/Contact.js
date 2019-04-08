import React, { Component } from 'react';
import Emoji from './Emoji';
import {Keyframes} from "react-spring/renderprops-universal";


const Container = Keyframes.Spring({
    show: { opacity: 1 },
    point: async (next, cancel, ownProps) => {
        await next({ paddingLeft: 0, paddingRight: 0, config: { easing: t => t, duration: 100 }});
        await next({ paddingLeft: 0, paddingRight: 5, config: { easing: t => t, duration: 100 }});
        await next({ paddingLeft: 5, paddingRight: 0, config: { easing: t => t, duration: 100 }});
        await next({ paddingLeft: 0, paddingRight: 0, config: { easing: t => t, duration: 100 }});
        ownProps.onRest();
    }
});

class Contact extends Component {

    onClickPoint = () => {
        this.setState({ ...this.state, pointAnimation: true });
    };

    onPointEnd = () => {
        this.setState({ ...this.state, pointAnimation: false });
    };

    state = {
      pointAnimation: false
    };

    render() {

        const { pointAnimation } = this.state;

        return (
            <div>
                <h2> Get in touch&nbsp;
                    <Container state={pointAnimation ? "point": "show"} onRest={this.onPointEnd} >
                        { props => <Emoji  onClick={this.onClickPoint} style={props} symbol=" 👉 " label="point-right"/> }
                    </Container>
                    &nbsp;
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href={"mailto:" + this.props.email}>{this.props.email}
                   </a>
                </h2>
            </div>
        );
    }
}

export default Contact;
