import { useState } from 'react'
import { Container, Typography, Grid, Box, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { CustomHeading } from '../../components/CustomHeading';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container sx={{ marginY: 10 }} component="section">
      <CustomHeading title="Contact Us" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            src={`/images/t3-1.jpg`}
            srcSet={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=600&auto=format&dpr=2 2x`}
            alt={"Contact Us"}
            loading="lazy"
            style={{
              display: 'block',
              width: '100%',
            }}
          />

          {/* 
                    <Image
            alt={"Contact Us"}
            src={`/images/t3-1.jpg`}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        */}
        </Grid>

        <Grid item xs={12} md={6}>
          <Box 
            component="form" 
            onSubmit={() => {}}
            sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}
          >
            <TextField 
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />

            <TextField 
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />

            <TextField 
              multiline
              rows={4}
              label="Message"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => {setMessage(e.target.value)}}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              loading={false}
            >
              Send
            </LoadingButton>
          </Box>

        </Grid>
      </Grid>
    </Container>
  )
}