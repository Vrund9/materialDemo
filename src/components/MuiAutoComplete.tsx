import { Autocomplete, Stack, TextField } from "@mui/material"
import { useState } from "react"

type Skill = {
  id: number,
  label: string,
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))


const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null)
  const [skill, setSkill] = useState<Skill | null>(null)
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete 
      options={skills} 
      value={value}
      freeSolo
      onChange={(event: any, newValue: string | null) => setValue(newValue)}
      renderInput={(params) => <TextField {...params} label="Skills" />} 
      />
      <Autocomplete 
      options={skillsOptions} 
      value={skill}
      onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      renderInput={(params) => <TextField {...params} label="Skills" />} 
      />
    </Stack>
  )
}

export default MuiAutoComplete