import { CloudRain, PartyPopper, ShieldCheck, Users } from "lucide-react";
import { AnimatedListDemo } from "./AnimatedList";

const features = [
  {
    name: "Sign up for free",
    description:
      "Join CalEasy today at no cost, enjoying seamless, effortless booking and appointment management with our streamlined scheduling platform.",
    icon: PartyPopper,
  },
  {
    name: "Blazing fast",
    description:
      "Experience blazing lightning speed performance with CalEasy, where quick load times and rapid scheduling guarantee efficient appointment booking.",
    icon: CloudRain,
  },
  {
    name: "Super secure with nylas",
    description:
      "Benefit from top-notch security integrated with Nylas, ensuring your data and appointments remain confidential and always fully protected.",
    icon: ShieldCheck,
  },
  {
    name: "Our upcoming features",
    description:
      "An AI model that processes messages from any messaging app, verifies the host's availability, and sends a confirmation response.",
    icon: Users,
  },
];

export function Features() {
  return (
    <div className="py-24">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Schedule faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Schedule meetings in minutes!
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          With CalEasy you can schedule meetings in minutes. We make it easy for
          you to schule meetings in minutes. The meetings are very fast and easy
          to schedule.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl md:grid md:grid-cols-2 md:gap-12">
        <div>
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <div className="text-base font-medium leading-7">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon className="size-6 text-white" />
                </div>
                {feature.name}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="py-5 md:py-1">
          <AnimatedListDemo />
        </div>
      </div>
    </div>
  );
}
