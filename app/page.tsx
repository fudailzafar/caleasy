import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { auth } from "./lib/auth";
import { redirect } from "next/navigation";
import { Hero } from "./components/Hero";
import { Logos } from "./components/Logos";
import { Features } from "./components/Features";
import { CTA } from "./components/Cta";
import { MarqueeDemo } from "./components/MarqueReview";
import BasicFAQ from "./components/Faq";
import { FooterDemo } from "./components/Footer";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />

      {/* Logos Section */}
      <div id="logos">
        <Logos />
      </div>

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <MarqueeDemo />
      </div>

      {/* Call to Action Section */}
      <div id="cta">
        <CTA />
      </div>

      {/* FAQ Section */}
      <div id="faqs">
        <BasicFAQ />
      </div>

      <FooterDemo />
    </div>
  );
}
