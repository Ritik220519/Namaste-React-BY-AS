import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError()
    return (
        <>
         <h2>Opps !!!</h2>
        <h2>somthing went wrong !!!!</h2>  
        <h3>{error.status}</h3>
        <h3>{error.statusText}</h3>      
        </>
       
        
    )
}

export default Error;