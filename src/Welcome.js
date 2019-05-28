import React, { Component } from 'react';


class Welcome extends Component {
    render() {
        const { name, designation } = this.props;
        // Syntex for the state 
        // const {state1, state2} = this.state;
        return (
            <div>
                Welcome {name} you are the {designation}
            </div>
        )
    }
}
export default Welcome;