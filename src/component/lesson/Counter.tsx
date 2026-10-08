import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h2>{count}</h2>
      <button className="button button-danger" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default Counter