import React, { useState } from 'react';

const Notes = ()=>{
const[info,setInfo] = useState('');
    const [data,setData] = useState([])

function handleChange(e){
setInfo(e.target.value);
}

function handleSubmit(e){
e.preventDefault();
    setData([...data,info]);
    setInfo(" ");
}

    return (
        <>
        
        <form onSubmit={handleSubmit}>
            <input type="text" value={info} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>

        <ul>
{
  data.map((item,index) => (
      <li key={index}> {item} </li>
    )
  )
}

        </ul>
        </>
    );
}

export default Notes;