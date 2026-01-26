// app/page.tsx
import ContactForm from '@/component/ContactForm';
import FAQ from '@/component/FAQ';
import Features from '@/component/Features';
import Hero from '@/component/Hero';
import MarketData from '@/component/MarketData';
import TradingOffers from '@/component/Offer';
import TradingTools from '@/component/Trading-Tools';
import '@/app/globals.css';
import CFDExplanation from '@/component/Process';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <TradingTools/>
      <TradingOffers/>
      <Features/>
      <MarketData/>
      <CFDExplanation/>
      <FAQ/>
      <ContactForm/>
      {/* Add more sections below as needed */}
    </main>
  );
}