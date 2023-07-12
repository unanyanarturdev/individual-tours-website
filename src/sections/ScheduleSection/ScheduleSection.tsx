import { Container, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Grid, Stack, CardHeader, Box, Chip, ChipProps, } from '@mui/material'
import { CustomHeading } from '../../components/CustomHeading';

export const ScheduleSection = () => {
  return (
    <Container sx={{ marginY: 10 }} component="section">
      <CustomHeading title="Schedule" />

      <Stack gap={3}>
        {itemData.map((item, index) => (
          <Card 
            elevation={2} 
            key={index}
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            {/* TODO Create component */}
              <CardMedia
                component="img"
                width={375}
                image={item.img}
                alt="green iguana"
                sx={{
                  width: { xs: '100%', md: 375 }
                }}
              />

            <CardContent sx={{ width: '100%' }}>
              <Stack>
                <Box display="flex" justifyContent="space-between" sx={{ flexDirection: { xs: 'column', md: 'row' } }} mb={2}>
                  <Typography 
                    gutterBottom 
                    variant="h5"
                    component="div"
                    sx={{}}
                  >
                    {item.date}
                  </Typography>

                  <Stack direction="row" gap={1}>
                    {
                      item.tags.map((t, ind) => (
                        <Chip 
                          key={ind}
                          label={t.label}
                          color={t.color as "default"}
                          size="small" 
                          variant="outlined" 
                        />
                      ))
                    }
                  </Stack>

                </Box>

                <Typography 
                  gutterBottom 
                  variant="h6"
                  component="div"
                  sx={{}}
                >
                  {item.title}
                </Typography>

                <Stack gap={1}>
                {
                  item.destinations.map((d, i) => (
                    <Typography 
                      key={i}
                      variant="body2" 
                      color="text.secondary" 
                      sx={{}}
                    >
                      - {d}
                    </Typography>
                  ))
                }
                </Stack>
               
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  )
}

const itemData = [
  {
    img: 'https://hyurservice.com/images/group_tours/1/1628249401985/860x460.jpg',
    date: '09:00 - 21:00, 01/07/2023',
    title: 'Haghpat Monastery',
    description: 'Lasting almost a whole day, this group tour will at the same time turn into an indescribably positive experience.',
    destinations: [
      'Erevan',
      'Haghpat Monastery',
      'Zarni-Parni Cave Complex',
      'Akhtala Fortress',
      'Aramyants Castle',
      'Sanahin Monastery',
    ],
    tags: [
      { label: 'Booked', color: 'default' },
      { label: 'today', color: 'info' },
    ],
  },
  {
    img: '/images/t3-1.jpg',
    date: '09:00 - 21:00, 01/07/2023',
    title: 'Gyumri',
    description: 'On this tour you will visit Gyumri, the second largest city in Armenia, one of the main cultural centers of the republic.',
    destinations: [
      'Erevan',
      'Gyumri (Urban life museum, Black Fortress, walking through the old streets)',
      'Harichavank',
    ],
    tags: [
      { label: '3 left', color: 'success' },
      { label: 'tomorrow', color: 'info' },
    ],
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16220113981603/860x460.jpeg',
    date: '09:00 - 21:00, 01/07/2023',
    title: 'Amberd Fortress',
    description: 'On this tour you will visit Amberd, a fortress on the southern slope of Mount Aragats, founded in the 7th century.',
    destinations: [
      'Erevan',
      'Amberd Fortress',
      'Mount Aragats',
      'Lake Kari',
      'Aregi Dry Fruit and Eco-Snack factory',
      'Saghmosavank Monastery',
    ],
    tags: [
      { label: '1 left', color: 'warning' },
      { label: 'next week', color: 'info' },
    ],
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16430348614855/600x460.jpg',
    date: '09:00 - 21:00, 01/07/2023',
    title: 'Khor Virap Monastery',
    description: 'On this tour you will visit Gyumri, the second largest city in Armenia, one of the main cultural centers of the republic.',
    destinations: [
      'Erevan',
      'Khor Virap Monastery',
      'Azat Reservoir view point',
      'Garni Temple',
      'Geghard Monastery',
      'Lavash baking master class',
    ],
    tags: [
      { label: '5 available', color: 'success' },
      { label: 'next week', color: 'info' },
    ],
  },
];