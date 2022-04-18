import React, {useState} from 'react';

function App() {
    const [value, setValue] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(false);
  
    const handleChange = (e) => {
       setValue(e.target.value);
    }
    const handlePalindrome = () =>{
       const x = value.split('').reverse().join('');
       console.log(x)
       if(value === x) {
          setIsPalindrome(true);
       }else if(value !== x){
         setIsPalindrome(false);
       }
       setValue('')
    }
    return(
        <>
          <input value={value} onChange={handleChange} type="text" />
         <button onClick={handlePalindrome}>check palindrome</button>
         <div>
          {isPalindrome ? `${value} is palindrome` : `${value} is not palindrome`}
         </div>
        </>
    )
}
export default App