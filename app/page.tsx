// app/page.tsx
import ContactForm from '@/component/ContactForm';
import FAQ from '@/component/FAQ';
import Features from '@/component/Features';
import Hero from '@/component/Hero';
import MarketData from '@/component/MarketData';
import TradingOffers from '@/component/Offer';
import Process from '@/component/Process';
import TradingTools from '@/component/Trading-Tools';
import '@/app/globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <TradingTools/>
      <Features/>
      <MarketData/>
      <Process/>
      <TradingOffers/>
      <FAQ/>
      <ContactForm/>
      {/* Add more sections below as needed */}
    </main>
  );
}