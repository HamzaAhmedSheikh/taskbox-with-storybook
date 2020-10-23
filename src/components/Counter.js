import React from 'react';


 function Counter (props) {
   return(
     <div style={{color: props.backgroundColor}}>
       Hello Counter  {props.initialValue}
     </div>       
   )
 }

 export default Counter;