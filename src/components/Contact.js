import React, { Component } from 'react';
import Emoji from './Emoji';


class Contact extends Component {
    render() {
        return (
            <div>
                <h2> Get in touch
                    <Emoji symbol=" 👉 " label="point-right"/>
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
