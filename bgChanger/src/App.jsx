import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor:color}}>
        <div className='fixed flex justify-center bottom-12 flex-wrap px-2 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-3 
          shadow-lg rounded-3xl px-3 py-4 bg-white'>
            <button onClick={() => {setColor("red")}} className='rounded-full text-white outline-none px-4 py-4'
            style={{backgroundColor:"red"}}
            >Red</button>
            <button onClick={() => {setColor("green")}} className='rounded-full text-white outline-none px-4 py-4'
            style={{backgroundColor:"green"}}
            >Green</button>
            <button onClick={() => {setColor("blue")}} className='rounded-full text-white outline-none px-4 py-4'
            style={{backgroundColor:"blue"}}
            >Blue</button>
            <button onClick={() => {setColor("pink")}} className='rounded-full text-white outline-none px-4 py-4'
            style={{backgroundColor:"pink"}}
            >Pink</button>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
