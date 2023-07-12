import { Box, Container } from "@mui/material"
import Image from "next/image"

export const Header = () => {
  return (
    <Box 
      component="header"
      sx={{
        position: 'absolute',
        width: '100%',
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
        <Image
          alt="Van Dam Tour"
          src={'/images/logo.png'}
          width={80}
          height={80}
        />
      </Container>
    </Box>
  )
}