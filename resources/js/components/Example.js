import React from 'react';
import ReactDOM from 'react-dom';

function Example(){
    return(
        <h1>Hello world from React.js</h1>
    )
}

export default Example;

ReactDOM.render(<Example/>,document.getElementById('component-example'));