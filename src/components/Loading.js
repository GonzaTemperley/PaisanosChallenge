import React from "react"
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Loading() {
  return (<CircularProgress
    sx={{
      color: '#fed530',
      margin: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 40
    }}
    size={50}
    thickness={2.5}
  />)
}
