import React, {createContext,useReducer,useContext} from 'react';


const initialState = {
    count :0
}

const AppContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'increment' : return {...state, count :state.count+1};
        case 'decrement' : return {...state, count :state.count-1};
       default : throw new error();

    }
}



export const AppProvider = ({children}) => {
const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <AppContext.Provider value={{state,dispatch}}>
        {children}
        </AppContext.Provider>
    )

}
export default AppContext;


// in a different Counter.jsx file
// import React from 'react';
// import AppContext 

function Counter(){
    const {state,dispatch} = useContext(AppContext); 
return(
    <>
    <p>Count is {state.count}</p>
    <button onClick={()=> { dispatch({type:'increment'})}}> + </button>
    <button onClick={()=> { dispatch({type:'decrement'})}}> - </button>
    </>
)

//also wrap the <App/> in <AppProvider> 

}


