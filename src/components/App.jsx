import React from 'react'
const text = import.meta.env.VITE_NISIM;
const apiHost = import.meta.env.VITE_API_HOST;
import yamit from './images/yamit.jpeg'
import "./style.css"

fetch(`${apiHost}/test`)
  .then(res => res.text())
  .then(data => console.log(data));

function App() {
  return (
    <>
      <div className='box'>
        <img width='300rem' src={yamit} alt="yamit" />
        <h1>My Beautiful Wife</h1>
        <h2>YAMIT</h2>
      </div>


    </>
  )
}

export default App
