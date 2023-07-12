import { Container, Typography, Grid } from '@mui/material'
import { CustomHeading } from '../../components/CustomHeading'

export const AboutSection = () => {
  return (
    <Container sx={{ marginY: 10 }} component="section">
      <CustomHeading title="About Us" />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={`https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7`}
            srcSet={`https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7?w=600&auto=format&dpr=2 2x`}
            alt={"About Us"}
            loading="lazy"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. 
            
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>

        </Grid>
      </Grid>
    </Container>
  )
}