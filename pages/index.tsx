import { Box } from '@mui/material';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { AboutSection, ContactSection, FAQSection, GallerySection, HeroSection, ScheduleSection, TestimonialsSection, ToursSection } from '../src/sections';

export default function Home() {
  return (
    <Box component="main">
      <Header />
      <HeroSection />
      <ScheduleSection />
      <GallerySection />
      <ToursSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}

export async function getStaticProps() {
  return { props: { } }
}


