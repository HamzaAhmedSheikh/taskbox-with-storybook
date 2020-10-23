import React from 'react';


 function Counter (props) {
   return(
     <div style={{color: props.backgroundColor}}>
      <h4> Hello World </h4> 
      <strong>  Hello Counter  {props.initialValue} </strong>
     </div>       
   )
 }

 export default Counter;