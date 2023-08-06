import React from 'react'
const text = import.meta.env.VITE_NISIM;
const apiHost = import.meta.env.VITE_API_HOST;


fetch(`${apiHost}/test`)
  .then(res => res.text())
  .then(data => console.log(data));

function App() {
  return (
    <>

      <img width='300rem' src='./src/components/images/yamit.jpeg' alt="yamit" />
      <h1>My Beautiful Wife</h1>
      <h2>YAMIT</h2>

    </>
  )
}

export default App
