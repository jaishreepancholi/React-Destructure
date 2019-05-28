import React, { Component } from 'react';
import Child from './child';

class Parent extends Component {

    constructor(props) {
        super(props);
    }

    parentFunctionHandler(childName) {
        alert(`Hello ${childName} from child`);
    }
    render() {
        return (
            <div>
                <Child parentHandler={this.parentFunctionHandler} />
            </div>
        )
    }
}
export default Parent;