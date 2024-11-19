import React, { useState } from 'react';

const FormReactExample = ()=>{
const[name,setName] = useState("");

function handleChange(e){
setName(e.target.value)
}

function handleSubmit(e){
    e.preventDefault();
    alert(`Name is ${name}`)
}

return (
<form onSubmit={handleSubmit}>
    <label htmlFor="name">Name
<input type="text" id="name" name='name' value={name} onChange={handleChange} />
</label>
<button type='submit'> Submit </button>

</form>
)

}

export default FormReactExample;