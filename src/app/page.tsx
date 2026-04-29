import { Comparison } from "@/components/sections/comparison";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { ModulesTabs } from "@/components/sections/modules-tabs";
import { MultiPharma } from "@/components/sections/multi-pharma";
import { Pricing } from "@/components/sections/pricing";
import { Security } from "@/components/sections/security";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <ModulesTabs />
        <HowItWorks />
        <Integrations />
        <MultiPharma />
        <Comparison />
        <Testimonials />
        <Security />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
