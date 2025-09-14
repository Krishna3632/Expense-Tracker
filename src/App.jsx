import React from 'react'
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className='h-screen flex items-center justify-center shadow-lg rounded-lg'>
             <div>
                <h1 className='text-3xl'>Links</h1>
                        <Link 
          to='/form' 
          className='text-blue-500 hover:underline'
        >
          Go to Form
        </Link>
             </div>
    </div>
  )
}

export default App