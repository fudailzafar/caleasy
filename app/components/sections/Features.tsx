import Features from "@/app/components/features-horizontal";
import Section from "@/app/components/section";
import { Link, MousePointerClick, Network, Workflow } from "lucide-react";

const data = [
  {
    id: 1,
    title: "ALL-IN-ONE Dashboard",
    content: "Find all your meetings in ONE place.",
    image: "/dashboard.png",
    icon: <Workflow className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Your convinience always.",
    content: "Your availablity is how your calendar is decided.",
    image: "/availability.png",
    icon: <Network className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "One-Click Cancellation",
    content: "Can't make it to a meet? Cancel with ease.",
    image: "/cancel.png",
    icon: <MousePointerClick className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Custom Links",
    content: "Generate custom links with your creativity!",
    image: "/customlink.png",
    icon: <Link className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" id="features2" subtitle="User Flows and Navigational Structures">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
