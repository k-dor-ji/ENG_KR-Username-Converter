import { useState } from "react";
import { PuffLoader } from "react-spinners"

function Conversion({ input, setInput, maxChars }) {
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState('');
  const handleConvert = async () => {
    setLoading(true)
    const response = await fetch('http://127.0.0.1:8000/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: input })
    });
    const data = await response.json();
    setOutput(data.qwerty)
    setLoading(false)
  }
  return (
    <div className="flex justify-center items-center gap-8 mt-20">
      {/* Input Box */}
      <div className="relative w-full max-w-3xl">
        <textarea
          className="textArea h-[300px] resize-none w-full"
          placeholder="Enter username to convert"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleConvert();
            }
          }}
          maxLength={maxChars} //maxLength for input
        />
        <div className="absolute bottom-2 right-4 text-[20px] text-white">
          {input.length} / {maxChars}
        </div>
      </div>
      <button className="convert-button sm:w-[500px] md:w-[300px]" onClick={handleConvert}>「Convert」</button>
      {/* Output Box */}
      <div className="w-full max-w-3xl">
        <div className="textArea flex justify-center w-full h-[300px] p-6 overflow-auto">
          {/* Output will go here */}
          {loading ? <PuffLoader size={250} color="white" /> : output}
        </div>
      </div>
    </div >
  )
}

export default Conversion