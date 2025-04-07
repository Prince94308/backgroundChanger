import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap   bottom-12 insert-x-0 px-2 justify-center">
        <div className="flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"><button onClick={()=>setColor("red")} className="outline-nonepx-4 px-4 pt-1 rounded-full text-white shadow-lg" style={{background:'red'}}>Red</button><button onClick={()=>setColor("brown")} className="outline-nonepx-4 px-4 pt-1 rounded-full text-white shadow-lg" style={{background:'brown'}}>brown</button><button onClick={()=>setColor("green")} className="outline-nonepx-4 px-4 pt-1 rounded-full text-white shadow-lg" style={{background:'green'}}>green</button><button onClick={()=>setColor("orange")} className="outline-nonepx-4 px-4 pt-1 rounded-full text-white shadow-lg" style={{background:'orange'}}>orange</button><button onClick={()=>setColor("blue")} className="outline-nonepx-4 px-4 pt-1 rounded-full text-white shadow-lg" style={{background:'blue'}}>blue</button><button onClick={()=>setColor("yellow")} className="outline-nonepx-4 px-4 pt-1 rounded-full text-white shadow-lg" style={{background:'yellow'}}>yellow</button></div>
      </div>
    </div>
  )
}

export default App
