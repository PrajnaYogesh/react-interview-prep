import React, { useCallback, useEffect, useState } from 'react'

function FetchData(){
const [data,setData] = useState(null);
const [loading,setLoading] = useState(false)

async function fetchDataFromAPI(){
    setLoading(true);
const response = await fetch('API');
const result = response.json();
if(result){
    setData(result);
    setLoading(false);
}
}

if(loading){
    return <h1>Loading...</h1>
}
useEffect(()=>{
    fetchDataFromAPI();
},[]);

    return (
        <>
        <button onClick={fetchDataFromAPI}>Click me</button>
 <div>{data?  data.title :  "Loading" }</div>
         </>
    )
    
}