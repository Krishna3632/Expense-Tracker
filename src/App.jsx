import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center'>
        
        {/* App Icon (Optional but nice for branding) */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 mb-4">
          <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 0112 20a8 8 0 01-5.657-2.343" />
          </svg>
        </div>
        
        {/* Updated Title and Subtitle */}
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          Expense Tracker
        </h1>
        <p className='text-gray-500 mb-8'>
          Welcome! Choose an option to get started.
        </p>
        
        {/* Container for the action buttons */}
        <div className='space-y-4'>

          {/* Primary Action: Add Expense */}
          <Link 
            to='/add-expense' // More descriptive route
            className='flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add New Expense
          </Link>
          
          {/* Secondary Action: View Dashboard */}
          <Link 
            to='/dashboard' // More descriptive route
            className='flex items-center justify-center w-full px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            View Dashboard
          </Link>

        </div>
      </div>
    </div>
  );
}

export default App;