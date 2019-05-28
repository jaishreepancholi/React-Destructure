import React, { Component } from 'react';


class Welcome extends Component {
    clickHandler() {
        console.log("class component click triggered");
    };
    render() {
        const { name, designation } = this.props;
        // Syntex for the state 
        // const {state1, state2} = this.state;

        return (
            <div>
                Welcome {name} you are the {designation}
                <button onClick={this.clickHandler}>Button2</button>
            </div>
        )
    }
}
export default Welcome;