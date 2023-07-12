import { Box, Container, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        backgroundColor: 'grey.900'
      }}
    >
      <Container sx={{ py: 3 }}>
        <Typography variant="subtitle1" color="white" textAlign="center">
          © {(new Date().getFullYear())} Copyright: Van Dam Tour
        </Typography>
      </Container>
    </Box>
  )
}