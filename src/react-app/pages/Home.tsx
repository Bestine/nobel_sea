import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Mission from '@/react-app/components/Mission';
import QuickNav from '@/react-app/components/QuickNav';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <QuickNav />
      <Footer />
    </div>
  );
}
