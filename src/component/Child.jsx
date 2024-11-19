import React from 'react';


function Child({count,incrementCount}){
    return (
<div>
        <h1>The count is : {count}</h1>
        <button onClick={incrementCount}>Click me </button>
        </div>
    )
}

export default Child;