import React from 'react'
const text = import.meta.env.VITE_NISIM;
const apiHost = import.meta.env.VITE_API_HOST;

console.log (apiHost);

function App() {
  return (
    <>
      <h1>yaniv project a</h1>
      <h2>{text}</h2>
    
    </>
  )
}

export default App
