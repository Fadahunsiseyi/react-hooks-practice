import React, { useState } from 'react'

function HookCounter() {
    const [number, setNumber] = useState(0)
  return (
    <div>
      <button onClick={(e) => setNumber(number + 1)} > Count {number}</button>
    </div>
  )
}

export default HookCounter
