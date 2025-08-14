import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [number,setNumber]=useState(false);
  const [character ,setCharacter]=useState(false);
  const[password,setPassword]=useState("");

  const passwordGenertor =useCallback(()=>{
    let pass =""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+="0123456789"
    }

    if(character){
      str+="!@#$%^&*()_+-={}[]|\:;<>,.?/"
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length+1)

      pass= str.charAt(char)


    }
    setPassword(pass)
  },[length,number,character,setPassword])


  return (
    <>
      <div className='w-full , max-w-md mx-auto shadow-md my-8 text-orange-500 rounded-lg bg-gray-700 '> 
        <h1 className='text-white  m-5 p-2 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full text-center py-1 px-3 bg-white text-black'
          placeholder='password'
          readOnly/>
        </div>
        </div>
    </>
  )
}

export default App
