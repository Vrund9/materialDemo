import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'
export const MuiSwitch = () => {
  const [value, setValue] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked)
  }
  return (
    <Box>
      <FormControlLabel label="Dark Mode" control={<Switch checked={value} onChange={handleChange} />} />
    </Box>
  )
}
