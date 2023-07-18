import { Box } from '@mui/material'

const MuiLayout = () => {
  return (
    <>

      <Box sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        height: '20px',
        width: '100px',
        padding: '16px',
        '&:hover': {
          backgroundColor: 'primary.light'
        }
      }}>Vrund Shah</Box>
      <Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>

      </Box>
    </>
  )
}

export default MuiLayout