// Code DelayedButton Component Here
import React from 'react'

export default function DelayedButton(props) {
  
  
  const handleClick = (event) => {
    event.persist()
    const onDelayedClick = props.onDelayedClick
   setTimeout(() => {
     onDelayedClick(event), props.delay
   })
  } 
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  )
}
