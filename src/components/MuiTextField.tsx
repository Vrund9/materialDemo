import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form" required error={!value} value={value} onChange={(e) => setValue(e.target.value)} helperText={!value ? 'Required' : 'Do not share your password with anyone'} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField disabled type="password" label="Password" helperText="Do not share your password with anyone" />
        <TextField label="Readonly" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Amount" InputProps={{ startAdornment: <InputAdornment position="start" >$</InputAdornment>}} />
        <TextField label="Weight" InputProps={{ endAdornment: <InputAdornment position="end" >KG</InputAdornment>}} />
      </Stack>
    </Stack>
  )
}

export default MuiTextField