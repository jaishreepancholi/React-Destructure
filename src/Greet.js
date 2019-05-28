
// Destructuring in functional componenet

import React from 'react';

const Greet = ({name, designation}) => {
    return(
        <div>
            <h1>
                Hello {name} you are {designation}.
            </h1>
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
