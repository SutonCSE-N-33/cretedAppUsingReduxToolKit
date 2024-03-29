import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './CounterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const handleIncement = () =>{
         dispatch(increment())
    }
    const handleDecrement = () =>{
        dispatch(decrement())
   }

   const handleReset = () =>{
    dispatch(reset())
}
    return (
        <div style={{textAlign:'center'}}>
            <h2>Count: {count}</h2>
            <button onClick={handleIncement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default CounterView;