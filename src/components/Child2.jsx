import React from 'react'
 function Child2({val}) {
    console.log("Child-2 rendered")
    const result = val + 5
  return (
    <div>Child2-{result}</div>
  )
}

export default React.memo(Child2)
