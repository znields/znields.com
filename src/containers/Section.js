import React, { Component } from 'react';

class Section extends Component {

    render() {
        return (
            <section>
                <div className="title"> {this.props.title} </div>

            </section>
        );
    }
}

export default Section;
