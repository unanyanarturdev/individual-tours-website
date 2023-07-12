import { Container, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material'
import { CustomHeading } from '../../components/CustomHeading';

export const ToursSection = () => {
  return (
    <Container sx={{ marginY: 10 }} component="section">
      <CustomHeading title="Tours" />

      <Grid container spacing={3}>
        {itemData.map((item, index) => (
          <Grid item xs={12}  sm={6} md={4} key={index}>
            {/* TODO Create component */}
            <Card elevation={2}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography 
                    gutterBottom 
                    variant="h5"
                    component="div"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "6",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  Explore
                </Button>
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
    img: 'https://hyurservice.com/images/group_tours/1/1628249401985/860x460.jpg',
    title: 'Haghpat Monastery, Zarni-Parni Cave Complex, Akhtala Fortress, Aramyants Castle, Sanahin Monastery',
    description: 'Lasting almost a whole day, this group tour will at the same time turn into an indescribably positive experience. It is dedicated to the visit of Lori province. You will first admire 10th century monastery Haghpat, where at the end of the 18th century the famous ashug Sayat-Nova lived and created. Next on the route, see the magnificent Zarni-Parni Cave Castle Complex, where, according to historical records, renowned scholar and philosopher Hovhannes Imastaser used to live and work. Currently the area is turned into a historical museum, where one can find number of rare ancient agricultural tools and household items. Afterwards, have a drive to Akhtala fortress, constructed on a plateau resembling a peninsula, surrounded with deep gorges from three sides. Visit Aramyants Castle, one of the jewels of Swiss architecture in Armenia. Last in the schedule is Sanahin monastery, where you will join the 10th century skillfullness of the masters, who made such a peculiar architectural decision – thus, preventing the destruction of the complex from possible earthquakes. By the way, both Haghpat and Sanahin monasteries are included in the UNESCO World Cultural Heritage List.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16123598640832/860x460.jpeg',
    title: 'Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank',
    description: 'On this tour you will visit Gyumri, the second largest city in Armenia, one of the main cultural centers of the republic. The only Catholic church in Armenia has recently been built in Gyumri. Visiting the Urban Life museum you will discover everyday life, culture and history of Gyumri. There will be a stop at Black Fortress, which is one of the famous monuments of Gyumri. Built in 1834, it is included in the list of intangible monuments of history and culture of the city. Walking through the streets of the town you will see lots of old buildings and feel the spirit of 19th century architecture. The monastery complex of Harichavank, the last stop, is situated on the western slope of Mount Aragats, on a rocky cape.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16220113981603/860x460.jpeg',
    title: 'Amberd Fortress, Mount Aragats, Lake Kari, Aregi Dry Fruit and Eco-Snack factory, Saghmosavank Monastery,',
    description: 'On this tour you will visit Amberd, a fortress on the southern slope of Mount Aragats, founded in the 7th century. Next up is Lake Kari at the height of 3250 m on the slopes of Mount Aragats, the highest point of Armenia (4090 m). Up next is the visit to "Aregi" Dry Fruit and Eco-Snack Factory, where incredible combinations of fruits and vegetables await you. "Aregi" products are exclusively without sugar and additives, the factory operates by receiving solar energy through special stations. Visit Saghmosavank, 13th century Armenian monastic complex, unique due to its frescoes with biblical themes and the perfect harmony with environment – vertical cliffs of Kasakh gorge. There comes the Alley of Armenian Letters (Alphabet Alley), that was built on the slopes of Mount Aragats in honor to the 1600th anniversary of the creation of Armenian alphabet. This monument is unique not only in Armenia, but all around the World.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16220149249494/600x460.jpeg',
    title: 'Echmiadzin (Hripsime, Gayane, Mother Cathedral – from outside, Museum Treasures of Echmiadzin), Zvartnots',
    description: 'Lasting almost a whole day, this group tour will at the same time turn into an indescribably positive experience. It is dedicated to the visit of Lori province. You will first admire 10th century monastery Haghpat, where at the end of the 18th century the famous ashug Sayat-Nova lived and created. Next on the route, see the magnificent Zarni-Parni Cave Castle Complex, where, according to historical records, renowned scholar and philosopher Hovhannes Imastaser used to live and work. Currently the area is turned into a historical museum, where one can find number of rare ancient agricultural tools and household items. Afterwards, have a drive to Akhtala fortress, constructed on a plateau resembling a peninsula, surrounded with deep gorges from three sides. Visit Aramyants Castle, one of the jewels of Swiss architecture in Armenia. Last in the schedule is Sanahin monastery, where you will join the 10th century skillfullness of the masters, who made such a peculiar architectural decision – thus, preventing the destruction of the complex from possible earthquakes. By the way, both Haghpat and Sanahin monasteries are included in the UNESCO World Cultural Heritage List.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16430348614855/600x460.jpg',
    title: 'Khor Virap Monastery, Azat Reservoir view point, Garni Temple, Geghard Monastery, Lavash baking master class',
    description: 'On this tour you will visit Gyumri, the second largest city in Armenia, one of the main cultural centers of the republic. The only Catholic church in Armenia has recently been built in Gyumri. Visiting the Urban Life museum you will discover everyday life, culture and history of Gyumri. There will be a stop at Black Fortress, which is one of the famous monuments of Gyumri. Built in 1834, it is included in the list of intangible monuments of history and culture of the city. Walking through the streets of the town you will see lots of old buildings and feel the spirit of 19th century architecture. The monastery complex of Harichavank, the last stop, is situated on the western slope of Mount Aragats, on a rocky cape.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16732733261169/600x460.jpg',
    title: "Lake Sevan, Hayravank Monastery, Noratus Crosstones, Orbelian's (Selim) Caravanserai, Arpi wine factory, Jermuk…",
    description: 'On this tour you will visit Amberd, a fortress on the southern slope of Mount Aragats, founded in the 7th century. Next up is Lake Kari at the height of 3250 m on the slopes of Mount Aragats, the highest point of Armenia (4090 m). Up next is the visit to "Aregi" Dry Fruit and Eco-Snack Factory, where incredible combinations of fruits and vegetables await you. "Aregi" products are exclusively without sugar and additives, the factory operates by receiving solar energy through special stations. Visit Saghmosavank, 13th century Armenian monastic complex, unique due to its frescoes with biblical themes and the perfect harmony with environment – vertical cliffs of Kasakh gorge. There comes the Alley of Armenian Letters (Alphabet Alley), that was built on the slopes of Mount Aragats in honor to the 1600th anniversary of the creation of Armenian alphabet. This monument is unique not only in Armenia, but all around the World.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16728411782938/600x460.jpg',
    title: 'Lori Fortress, St. Nicholas the Wonderworker Church, Odzun Monastery, Kobayr Monastery',
    description: 'Lasting almost a whole day, this group tour will at the same time turn into an indescribably positive experience. It is dedicated to the visit of Lori province. You will first admire 10th century monastery Haghpat, where at the end of the 18th century the famous ashug Sayat-Nova lived and created. Next on the route, see the magnificent Zarni-Parni Cave Castle Complex, where, according to historical records, renowned scholar and philosopher Hovhannes Imastaser used to live and work. Currently the area is turned into a historical museum, where one can find number of rare ancient agricultural tools and household items. Afterwards, have a drive to Akhtala fortress, constructed on a plateau resembling a peninsula, surrounded with deep gorges from three sides. Visit Aramyants Castle, one of the jewels of Swiss architecture in Armenia. Last in the schedule is Sanahin monastery, where you will join the 10th century skillfullness of the masters, who made such a peculiar architectural decision – thus, preventing the destruction of the complex from possible earthquakes. By the way, both Haghpat and Sanahin monasteries are included in the UNESCO World Cultural Heritage List.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16123598640832/860x460.jpeg',
    title: 'Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank',
    description: 'On this tour you will visit Gyumri, the second largest city in Armenia, one of the main cultural centers of the republic. The only Catholic church in Armenia has recently been built in Gyumri. Visiting the Urban Life museum you will discover everyday life, culture and history of Gyumri. There will be a stop at Black Fortress, which is one of the famous monuments of Gyumri. Built in 1834, it is included in the list of intangible monuments of history and culture of the city. Walking through the streets of the town you will see lots of old buildings and feel the spirit of 19th century architecture. The monastery complex of Harichavank, the last stop, is situated on the western slope of Mount Aragats, on a rocky cape.'
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16220113981603/860x460.jpeg',
    title: 'Amberd Fortress, Mount Aragats, Lake Kari, Aregi Dry Fruit and Eco-Snack factory, Saghmosavank Monastery,',
    description: 'On this tour you will visit Amberd, a fortress on the southern slope of Mount Aragats, founded in the 7th century. Next up is Lake Kari at the height of 3250 m on the slopes of Mount Aragats, the highest point of Armenia (4090 m). Up next is the visit to "Aregi" Dry Fruit and Eco-Snack Factory, where incredible combinations of fruits and vegetables await you. "Aregi" products are exclusively without sugar and additives, the factory operates by receiving solar energy through special stations. Visit Saghmosavank, 13th century Armenian monastic complex, unique due to its frescoes with biblical themes and the perfect harmony with environment – vertical cliffs of Kasakh gorge. There comes the Alley of Armenian Letters (Alphabet Alley), that was built on the slopes of Mount Aragats in honor to the 1600th anniversary of the creation of Armenian alphabet. This monument is unique not only in Armenia, but all around the World.'
  },
];