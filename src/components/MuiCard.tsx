import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component="img" height="140" image="https://source.unsplash.com/random" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">React</Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores eum aperiam a distinctio ut, fuga aliquam dolorem voluptatem libero molestias ducimus</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard