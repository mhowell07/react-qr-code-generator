import { useState } from 'react'

// libraries
import QRCode  from 'qrcode'

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
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
      <img src={qrcode} />
    </div>
  )
}

export default App