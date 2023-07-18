import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React, { useState } from 'react'
const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-grp-label">
          Years of experience
        </FormLabel>
        <RadioGroup row name='job-experience-grp' aria-labelledby='job-experience-grp-label' value={value} onChange={handleChange}>
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-9" value="6-9" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton