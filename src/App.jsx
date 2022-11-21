import { useState } from 'react'

// libraries
import QRCode  from 'qrcode'

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: "#2A2B2A",
      }
    }, (err, url) => {
      if (err) return console.error(err)

      console.log(url)
      setQrcode(url)
    })
  }

  return (
    <div className="container">
      <header>
        <h1>QR Code Generator</h1>
      </header>
      <div className="wrapper">
        <input
          type="text"
          id="url"
          className="input"
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Url"
        />
      </div>
      <button
        className="btn"
        aria-label="Add Url"
        type="submit"
        onClick={GenerateQRCode}
        >
        Generate
      </button>
      {qrcode && <>
        <img src={qrcode} />
        <a 
          href={qrcode} 
          download="qrcode.png"
          className='dl-link'  
        >Download</a>
      </>}
    </div>
  )
}

export default App