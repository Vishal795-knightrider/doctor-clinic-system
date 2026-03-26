import PublicLayout from '@/components/layout/PublicLayout';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import Testimonials from '@/components/sections/Testimonials';
import ClinicTimings from '@/components/sections/ClinicTimings';
import CTABanner from '@/components/sections/CTABanner';
import { SERVICES, TESTIMONIALS, TIMINGS } from '@/lib/data';

export default function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <ServicesSection services={SERVICES} />
      <Testimonials testimonials={TESTIMONIALS} />
      <ClinicTimings timings={TIMINGS} />
      <CTABanner />
    </PublicLayout>
  );
}
