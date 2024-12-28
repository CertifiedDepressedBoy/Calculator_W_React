import Input from "./components/Input"
import Button from "./components/Button"
import './App.css'
import { useState } from "react"

function App() {
  const [input, setInput] = useState("0");

  function clickHandling(value) {
    if (value === 'C') {
      setInput("0");
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === 'Del') {
      setInput(input.length === 1 ? "0" : input.slice(0, -1));
    } else {
      setInput(input === "0" ? value : input + value);
    }
  }

  return (
    <div className="container">
      <div className="calculator_frame">
        <Input input={input} />
        <Button clickHandling={clickHandling} />
      </div>
    </div>
  )
}

export default App
