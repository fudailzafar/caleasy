import Section from "@/app/components/section";
import { AuthModal } from "../AuthModal";

export default function CTA() {
  return (
    <Section
      id="cta"
      title="Ready to get started?"
      subtitle="Start your first meeting today."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <AuthModal text={"Start Now!"}/>
      </div>
    </Section>
  );
}
