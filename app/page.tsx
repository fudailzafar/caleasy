import { auth } from "./lib/auth";
import { redirect } from "next/navigation";
import Hero from "./components/sections/Hero";
import Logos from "./components/sections/Logos";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";
import HowItWorks from "./components/sections/HowItWorks";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";
import CTA from "./components/sections/CTA";
import Header from "./components/sections/Header";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
