import Features from "@/app/components/features-vertical";
import Section from "@/app/components/section";
import { CalendarRange, LogIn, Sparkles } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Sign Up with your Account",
    content:
      "Get started in seconds—create your account with just your Google or GitHub sign-in. No complicated setup, just a smooth start to managing your bookings effortlessly.",
    image: "/sign-in.png",
    icon: <LogIn className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Connect your Calendar",
    content:
      "Sync with Google Calendar so all your meetings are automatically updated. No double-bookings, no missed slots—just perfect scheduling harmony.",
    image: "/calendar.png",
    icon: <CalendarRange className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Make Your First Booking Link!",
    content:
      "Generate a personalized booking link and share it with clients in one click. They pick a time, you get instant confirmations—no back-and-forth emails ever again.",
    image: "/customlink.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function HowItWorks() {
  return (
    <Section id="howitworks" title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
