import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="City">
                <img src={this.props.aze} className="image" />
                <div className="description">
                    <p>{this.props.des}</p>
                </div>
            </div>
        )
    }
}
export default City