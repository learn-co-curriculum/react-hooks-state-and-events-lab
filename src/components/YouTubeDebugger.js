import React, { useState } from 'react'

function YouTubeDebugger(props) {
  const [settings, setSettings] = useState({
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  })

  function handleBitrateClick() {
    setSettings(prevSettings => {
      return {
        ...prevSettings,
        bitrate: 12
      }
    })
  }

  function handleResolutionClick() {
    setSettings(prevSettings => {
      return {
        ...prevSettings,
        video: {
          resolution: "720p"
        }
      }
    })
  }

  return (
    <div>
      <button className="bitrate" onClick={handleBitrateClick}>
        Current bitrate: {settings.bitrate}
      </button>
      <button className="resolution" onClick={handleResolutionClick}>
        Current resolution: {settings.video.resolution}
      </button>
    </div>
  )
}

export default YouTubeDebugger