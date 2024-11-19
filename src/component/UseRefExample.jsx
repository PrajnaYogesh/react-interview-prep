import React, {useRef} from 'react';


export const UseRefExample = ()=>{
const inputRef = useRef(null);
function handleInputFocus(){
inputRef.current.focus();
}

    return (
        <> 
        <input type="text" ref={inputRef} />
        <button onClick={handleInputFocus}>Click me </button>
        </>
    )
}