
import { Container, Typography, Card, CardContent, CardActions, Grid, CardHeader, Avatar } from '@mui/material'
import { CustomHeading } from '../../components/CustomHeading';

export const TestimonialsSection = () => {
  return (
    <Container sx={{ marginY: 10 }} component="section">
      <CustomHeading title="Testimonials" />

      <Grid container spacing={3}>
        {itemData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
              }} 
              elevation={2}
            >
              <CardHeader
                avatar={
                  <Avatar 
                    src={item.img}
                    srcSet={item.img}
                    aria-label="recipe"
                  >
                    AA
                  </Avatar>
                }
                title={item.title}
                subheader={item.subTitle}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography fontStyle="italic" variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Typography variant="caption">
                  09 May 2023
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const itemData = [
  {
    img: 'https://hyurservice.com/images/language/1/16154719530173/40x40.png',
    title: 'Brenna Goyette',
    subTitle: '@brennagoyette',
    description: '“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”',
  },
  {
    img: 'https://hyurservice.com/images/language/1/16154718901073/40x40.png',
    title: 'Leslie Alexander',
    subTitle: '@lesliealexander',
    description: '“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”',
  },
  {
    img: 'https://hyurservice.com/images/language/1/16154719407757/40x40.png',
    title: 'Brenna Goyette',
    subTitle: '@brennagoyette',
    description: '“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”',
  },
  {
    img: 'https://hyurservice.com/images/language/1/16154719290421/40x40.png',
    title: 'Leslie Alexander',
    subTitle: '@lesliealexander',
    description: '“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”',
  },
  {
    img: 'https://hyurservice.com/images/language/1/16154719530173/40x40.png',
    title: 'Brenna Goyette',
    subTitle: '@brennagoyette',
    description: '“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.”',
  },
  {
    img: 'https://hyurservice.com/images/language/1/16154719290421/40x40.png',
    title: 'Leslie Alexander',
    subTitle: '@lesliealexander',
    description: '“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.”',
  },
];