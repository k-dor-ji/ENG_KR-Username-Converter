import Mapping from '@/components/mapping'
import Conversion from '@/components/conversion'
import './components/conversion.css'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('');
  const maxChars = 30;
  return (
    <div className="space-y-24">
      <h1 className='title'>English to Korean QWERTY Converter</h1>
      <Conversion input={input} setInput={setInput} maxChars={maxChars} />
      <h2 className='title'>Mappings Utilized:</h2>
      <Mapping />
    </div >
  )
}

export default App
