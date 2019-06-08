import React, { Component } from 'react';

class Program extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={pr}>
                <h1>{this.props.abc}</h1>
                <p>{this.props.des}</p>
                <center><button>en savoir plus</button></center>
            </div>

        );
    }
}
const pr = {
    backgroundColor: 'blue',
    display : 'inline-block',
    margin: 15
}
export default Program;