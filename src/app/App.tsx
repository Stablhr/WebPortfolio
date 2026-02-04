import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { BrandsSection } from '@/app/components/BrandsSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import { PortfolioSection } from '@/app/components/PortfolioSection';
import { CertificatesSection } from '@/app/components/CertificatesSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <SkillsSection />
        <PortfolioSection />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  );
}