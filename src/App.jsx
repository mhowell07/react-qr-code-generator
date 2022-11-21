import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'

function App() {

  return (
    <div className="container">
      <header>
        <h1>QR Code Generator</h1>
      </header>
      <CustomForm />
    </div>
  )
}

export default App