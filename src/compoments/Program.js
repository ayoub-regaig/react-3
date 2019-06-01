import React, { Component } from 'react';

class Program extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className= "program">
                <h1>{this.props.abc}</h1>
                <p>{this.props.des}</p>
                <center><button>en savoir plus</button></center>

            </div>
        )
    }
}
export default Program