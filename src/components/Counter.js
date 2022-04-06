import React, { useState } from 'react';

const nums = [
    {
        id: 1,
        counter: 2,
        increment: 1
    },
    {
        id: 2,
        counter: 5,
        increment: 2
    },
    {
        id: 3,
        counter: 7,
        increment: 5
    },
    {
        id: 4,
        counter: 12
    }
]

const CounterNumber = () => {
    const [counter, setCounter] = useState(nums);
    const [sorted, setSorted] = useState(null);
    
    const handleIncrement = (item) => {
     const newItem = counter.map(el => {
         if(el.id === item.id) {
            el.counter += el.increment || 1;
         }
         return el;
     })
     setCounter(newItem)
    }
    const handleSort = () => {
        if(sorted === null) {
          setSorted(true)
        }
        if(sorted === true) {
          setSorted(false)
        }
        if(sorted === false) {
          setSorted(null)
        }
        console.log(sorted)

        const newItem = counter.sort((a, b) => {
            if(sorted) {
               return a.counter - b.counter;
            }else if(sorted === false) {
               return b.counter - a.counter;
            }
        });
        setCounter(newItem)
    }
    return (
      <>
       {counter.map(item => <div key={item.id}>
         <h5>{item.counter}</h5>
         <button onClick={() => handleIncrement(item)}>increment</button>
        </div>)}
        <button onClick={handleSort}>sort</button>
      </>
    )
}


function Counter() {
    return (
        <>
         <CounterNumber />
        </>
    )
}

export default Counter