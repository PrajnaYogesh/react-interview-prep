import React from 'react'

function UseMemoHook() {
const [count,setCount] = useState(0);
const [name,setName] = useState('');


function expensiveComputation(value){
for(let i=0;i<10000000;i++){
return value*2;
}
}

const expensiveValue = useMemo(()=>{
    return expensiveComputation(count);
},[count])


function updateName(){
setName(name);
}

function handleClick(){
    setCount(count+1);
}

  return (
    <div>
        <p>Count is {count}</p>
<input type="text" onChange={updateName} value={name} />
<button onClick={handleClick}> + </button>
<p>expensive value is : {expensiveValue}</p>
      </div>
  )
}

export default UseMemoHook