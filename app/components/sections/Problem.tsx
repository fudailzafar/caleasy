import BlurFade from "@/app/components/magicui/blur-fade";
import Section from "@/app/components/section";
import { Card, CardContent } from "@/app/components/ui/card";
import { ChartScatter, MailWarning, Timer } from "lucide-react";

const problems = [
  {
    title: "Lost Time",
    description:
      "Professionals waste hours in endless back-and-forth emails trying to find the right meeting slot, leading to delays and missed opportunities.",
    icon: Timer,
  },
  {
    title: "Scattered Apps",
    description:
      "Using multiple scheduling apps and manual processes creates confusion, slows down workflows, and makes meeting coordination frustrating.",
    icon: ChartScatter,
  },
  {
    title: "Error - Prone",
    description:
      "Without a streamlined system, double bookings, missed invites, and time zone mix-ups happen too often—hurting productivity and client relationships.",
    icon: MailWarning,
  },
];

export default function Problem() {
  return (
    <Section
      title="Problem"
      subtitle="Manually scheduling your meetings is a hassle."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
