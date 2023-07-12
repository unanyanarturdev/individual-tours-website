import { useState } from 'react';
import { Box, Container, Paper, styled } from '@mui/material'
import { Masonry } from '@mui/lab';
// TODO: Create Lightbox Component
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { CustomHeading } from '../../components/CustomHeading';

export const GallerySection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(-1);
  return (
    <Container sx={{ marginY: 10 }} component="section">
      <CustomHeading title="Gallery" />

      <Lightbox
        open={activeSlideIndex >= 0}
        close={() => {setActiveSlideIndex(-1)}}
        index={activeSlideIndex}
        slides={itemData.map(item => ({ src: item?.img }))}
      />

      <Box>
        <Masonry columns={{ xs: 2, md: 3 }} spacing={{ xs: 1, md: 3 }}>
          {itemData.map((item, index) => (
            <Box 
              component="div"
              key={index} 
              onClick={() => {setActiveSlideIndex(index)}}
              sx={{ cursor: 'pointer' }}
            >
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Label>
                {item.title}
              </Label>
            </Box>
          ))}
        </Masonry>
      </Box>
    </Container>
  )
}

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));

const itemData = [
  {
    img: '/images/t3-1.jpg',
    title: 'Fern',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/1628249401985/860x460.jpg',
    title: 'Fern',
  },
  {
    img: '/images/t3-2.jpg',
    title: 'Snacks',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16123598640832/860x460.jpeg',
    title: 'Snacks',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16220113981603/860x460.jpeg',
    title: 'Mushrooms',
  },
  {
    img: '/images/t3-4.jpg',
    title: 'Tower',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16220149249494/600x460.jpeg',
    title: 'Tower',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16430348614855/600x460.jpg',
    title: 'Fern',
  },
  {
    img: '/images/t3-3.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16732733261169/600x460.jpg',
    title: 'Snacks',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16728411782938/600x460.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16123598640832/860x460.jpeg',
    title: 'Tower',
  },
  {
    img: 'https://hyurservice.com/images/group_tours/1/16220113981603/860x460.jpeg',
    title: 'Fern',
  },
];

