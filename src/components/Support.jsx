import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0)

  return (
    <button className="outline" style={{width: '100%', marginTop: '10px'}} onClick={() => setCount(count + 1)}>
      { count === 0 ? "Click to Support" : `Supported ${count} Times` }
    </button>
  )
}