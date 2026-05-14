import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'Siddharya Yoga Ashram | Yoga & Meditation Retreat in Rishikesh',
  description: 'Discover inner peace at Siddharya Yoga Ashram in Rishikesh. Join our transformative 3, 4, 5, 6, 7, and 10-day Yoga & Meditation retreats in the spiritual heart of India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
