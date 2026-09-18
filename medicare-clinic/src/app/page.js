import PublicLayout from '@/components/layout/PublicLayout';
import Hero from '@/components/sections/Hero';
import ClinicalCopilot from '@/components/sections/ClinicalCopilot';
import ServicesSection from '@/components/sections/ServicesSection';
import Testimonials from '@/components/sections/Testimonials';
import CarePricing from '@/components/sections/CarePricing';
import ClinicTimings from '@/components/sections/ClinicTimings';
import FaqSection from '@/components/sections/FaqSection';
import CTABanner from '@/components/sections/CTABanner';
import { SERVICES, TESTIMONIALS, TIMINGS } from '@/lib/data';

export default function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <ClinicalCopilot />
      <ServicesSection services={SERVICES} />
      <Testimonials testimonials={TESTIMONIALS} />
      <CarePricing />
      <ClinicTimings timings={TIMINGS} />
      <FaqSection />
      <CTABanner />
    </PublicLayout>
  );
}
