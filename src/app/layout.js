import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Inter } from 'next/font/google';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'C2S Insurance Platform',
  description: 'Your trusted insurtech partner in the Middle East',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
