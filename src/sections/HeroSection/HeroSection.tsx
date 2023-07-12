import { Container } from "@mui/material"

export const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters component="section">
      <video width="600px" height="600px" muted autoPlay loop 
        style={{
          width: '100%', 
          height: '100vh', 
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src="/videos/hero-1.mp4" type="video/mp4" />
        <source src="/videos/hero-1.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </Container>
  )
}