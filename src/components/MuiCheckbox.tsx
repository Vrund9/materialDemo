import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {
  const [accept, setAccept] = useState(true)
  const [skills, setSkills] = useState<string[]>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(event.target.checked)
  }

  const handleSkillsChange= (event: React.ChangeEvent<HTMLInputElement>) => { 
    const index = skills.indexOf(event.target.value)
    if(index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={accept} onChange={handleChange} />} />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={accept} onChange={handleChange} />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel label="HTML" control={<Checkbox value="html" checked={skills.includes('html')} onChange={handleSkillsChange} />} />
            <FormControlLabel label="JS" control={<Checkbox value="js" checked={skills.includes('js')} onChange={handleSkillsChange} />} />
            <FormControlLabel label="React" control={<Checkbox value="react" checked={skills.includes('react')} onChange={handleSkillsChange} />} />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox