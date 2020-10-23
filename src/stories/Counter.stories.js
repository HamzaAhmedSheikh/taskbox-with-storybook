import React from 'react';
import Counter from '../components/Counter';


export default {
   title: "Counter",
   component: Counter  
}

export function CounterDefault() {
   return (
    <Counter />         
  ) 
}

export function CounterWithValue() {
   return (
    <Counter initialValue={34} />  
  ) 
}