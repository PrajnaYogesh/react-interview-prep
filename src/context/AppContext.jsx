import React ,{useState, createContext} from 'react';

//1] create AppContext
const AppContext = createContext();
//for multiple context, you can create more than 1 context like above and wrap them inside the Provider below

// 2] Create AppProvider, here children is a special prop that says you can wrap your children  components
export const AppProvider = ({children}) =>{

const [counting,setCounting] = useState(0);

const increment = ()=>{
   counting<= 9?setCounting(counting+1) : counting    ;
}

const decrement = ()=>{
   counting>=1? setCounting(counting-1) : counting;
}

return (
    //wraping this context around chidrens so thestates and the functions cane be used there
    <AppContext.Provider value = {{counting,increment,decrement}}>
{children}
    </AppContext.Provider>
)

}

export default AppContext;

// Steps 
// In this step:
//create a context folder under src and create AppContext.js
//1. createContext() is used to create a new context.
// 2.We create a provider (AppProvider) that will wrap the components and provide the shared state (count) and functions (increment, decrement).
// Step 3: Wrap your App with the Provider
// Now, you need to wrap your app with the AppProvider in the main entry point (index.js or App.js) to make the context available to all child components.