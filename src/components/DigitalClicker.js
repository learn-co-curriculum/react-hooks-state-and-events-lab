import React, { useState } from 'react'

function DigitalClicker() {
  const [timesClicked, setTimesClicked] = useState(0);

  function handleClick() {
    setTimesClicked(prevTimesClicked => prevTimesClicked + 1)
  }

  return (
    <button onClick={handleClick}>{timesClicked}</button>
  )
}

export default DigitalClicker