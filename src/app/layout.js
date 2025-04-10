// src/app/layout.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export const metadata = {
  title: 'C2S Insurance Platform',
  description: 'Your trusted insurtech partner in the Middle East',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
