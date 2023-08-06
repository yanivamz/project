import React from 'react'
const text = import.meta.env.VITE_NISIM;
const apiHost = import.meta.env.VITE_API_HOST;

fetch(`${apiHost}/test`)
  .then(res => res.text())
  .then(data => console.log(data));

function App() {
  return (
    <>
      <h1>נדב הגבר לך תסדר את הבית</h1>
      <h2>{text}</h2>

    </>
  )
}

export default App
