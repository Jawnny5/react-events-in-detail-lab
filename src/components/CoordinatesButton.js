// Code CoordinatesButton Component Here
import React from 'react'

export default function CoordinatesButton(props) {
  
  const handleClick = (event) =>{
    const Coords = [event.clientX, event.clientY]
    const onReceiveCoordinates = props.onReceiveCoordinates
    onReceiveCoordinates(Coords)
  }
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  )
}
