import { useContext, useReducer, useState } from 'react'
import Child from './component/Child'
import './App.css'
import AppContext from './context/AppContext';
import { UseRefExample } from './component/UseRefExample';
import FormReactExample from './component/FormReactExample';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './component/NavBar';
import Notes from './component/Notes';

const reducer = (state,action) => {
  switch(action.type){
    case 'true' : return {...state, flag : 'true'};
    case 'false' : return {...state, flag:'false'};
    case 'setName' : return {...state, name : action.payload}
    default : throw new error();
  }

}

function App() {
  //consuming the state from AppProvider here
 const {counting,increment,decrement} = useContext(AppContext)
const [count,setCount] = useState(0);
const[state,dispatch] = useReducer(reducer, {flag: 'false', name:'Type name here'})

function updateCount(){
  setCount(count+1);
}

  return (
    <>
<NavBar />

    <h1>Lifting state example with Child Component</h1>
      <Child count={count} incrementCount={updateCount} />

<h1>UseContextExample</h1>
      <h5>Counting is : {counting}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>


<h1>UseReducer Example</h1>
<h2>Flag is {state.flag}</h2>
<button onClick={()=> dispatch({type : 'true'}) }>True</button>
<button onClick={()=> dispatch({type:'false'})} >False</button>
<input type="text" value={state.name}  onChange={(e) => dispatch({type : 'setName', payload : e.target.value})}/>
<p>{state.name}</p>

<h1>UseRefExample</h1>
<UseRefExample />

<h1>Form using React Example</h1>
<FormReactExample />

<h1>Routes Demo</h1>

<Routes>
<Route path='/' element={ <Home /> } />
<Route path='/login' element={<Login />} />
</Routes>


<h1>Notes Example</h1>
<Notes />

    </>
  )
}

export default App
