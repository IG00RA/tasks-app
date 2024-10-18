import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Typography variant="h4" align="center" color="#009595" gutterBottom>
      {currentTime}
    </Typography>
  )
}

export default Clock
