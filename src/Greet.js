
// Destructuring in functional componenet

import React from 'react';

const Greet = ({ name, designation }) => {
    function clickHandler() {
        console.log("Functional Component click handler");
    }
    return (
        <div>
            <h1>
                Hello {name} you are {designation}.
            </h1>
            <button onClick={clickHandler}>Button1</button>

        </div>
    )
}
export default Greet;



// Second way to destructuring in function body

// const Greet = props => {
//     const {name, designation} = props
//     return(
//         <div>
//             <h1>
//                 Hello {name} you are {designation}.
//             </h1>
//         </div>  
//     )
// }
// export default Greet;
