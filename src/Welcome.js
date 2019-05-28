import React, { Component } from 'react';


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'This is State Component'
        }
    }
    // console is not print untill the setState not worked
    // We can do it by using 2 way

    // using Callback
    // clickHandler() {
    //     this.setState({
    //         message: 'After Event Binding'
    //     }, () => {
    //         console.log("class component click triggered", this.state.message);
    //     })
    // };


    // Using Async Await
    async clickHandler() {
        await this.setState({
            message: 'After Event Binding'
        })
        console.log("class component click triggered", this.state.message);
    };


    render() {
        const { name, designation } = this.props;
        // Syntex for the state 
        // const {state1, state2} = this.state;

        return (
            <div>
                Welcome {name} you are the {designation}
                <button onClick={() => this.clickHandler()}>Button2</button>
            </div>
        )
    }
}
export default Welcome;