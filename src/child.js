
import React from 'react';

function Child(props) {
    return (
        <div>
            <button onClick={() => props.parentHandler('Child')}>Child Button</button>

        </div>
    )
}
export default Child;

