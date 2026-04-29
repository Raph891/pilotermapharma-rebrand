import { Challenges } from "@/components/sections/challenges";
import { CoffreRh } from "@/components/sections/coffre-rh";
import { Comparison } from "@/components/sections/comparison";
import { Conformite } from "@/components/sections/conformite";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { MdlSection } from "@/components/sections/mdl-section";
import { MultiPharma } from "@/components/sections/multi-pharma";
import { Objectives } from "@/components/sections/objectives";
import { Payroll } from "@/components/sections/payroll";
import { Planning } from "@/components/sections/planning";
import { Pricing } from "@/components/sections/pricing";
import { Security } from "@/components/sections/security";
import { Showcase } from "@/components/sections/showcase";
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
        <Objectives />
        <Payroll />
        <Planning />
        <Showcase />
        <MdlSection />
        <Challenges />
        <HowItWorks />
        <Integrations />
        <MultiPharma />
        <Comparison />
        <Testimonials />
        <Security />
        <Conformite />
        <CoffreRh />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
