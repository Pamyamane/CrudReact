import { Typography } from '@mui/material'
import React from 'react'

function ErrorMessage({error}) {
  return (
    <div>
      <Typography sx={{ color:"white" , ml:"20px"}}>{error}</Typography>  
    </div>
  )
}

export default ErrorMessage