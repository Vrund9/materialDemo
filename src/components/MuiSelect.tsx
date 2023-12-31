import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const MuiSelect = () => {
  const [country, setCountry] = useState<string []>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value  = event.target.value
    setCountry(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width="250px">
      <TextField label="Select Country" select value={country} onChange={handleChange} fullWidth SelectProps={{ multiple: true}}>
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect