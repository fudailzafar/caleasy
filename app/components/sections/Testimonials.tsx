"use client";

import Marquee from "@/app/components/magicui/marquee";
import Section from "@/app/components/section";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Sarah Kapoor",
    role: "Marketing Manager at BrightPath",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
    description: (
      <p>
        CalEasy has completely transformed how I manage client meetings.
        <Highlight>
          The Zoom integration is flawless, and the clean UI makes scheduling a
          breeze.
        </Highlight>{" "}
        My clients love the simple booking links — no more back-and-forth
        emails.
      </p>
    ),
  },
  {
    name: "David Chen",
    role: "Freelance Consultant",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    description: (
      <p>
        Switching from Calendly to CalEasy was the best decision for my
        business.
        <Highlight>
          Google Meet integration works instantly, and I save hours each week.
        </Highlight>{" "}
        It’s a must-have tool for any busy professional.
      </p>
    ),
  },
  {
    name: "Priya Menon",
    role: "HR Lead at ZenithCorp",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    description: (
      <p>
        We use CalEasy for recruitment interviews, and it’s been a game-changer.
        <Highlight>
          The scheduling process is effortless, even for first-time candidates.
        </Highlight>{" "}
        Our no-show rate has dropped significantly.
      </p>
    ),
  },
  {
    name: "James O’Neill",
    role: "Startup Founder",
    img: "https://randomuser.me/api/portraits/men/28.jpg",
    description: (
      <p>
        CalEasy has streamlined our investor and partner calls.
        <Highlight>
          Custom, easy-to-remember links make booking instant.
        </Highlight>{" "}
        It’s scheduling done right.
      </p>
    ),
  },
  {
    name: "Ananya Gupta",
    role: "Project Manager at Innovexa",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    description: (
      <p>
        Before CalEasy, I spent hours chasing people for meeting times.
        <Highlight>
          Now, everyone books themselves and our Teams integration works
          perfectly.
        </Highlight>{" "}
        Zero double-bookings since we switched.
      </p>
    ),
  },
  {
    name: "Liam Foster",
    role: "Sales Lead at GrowthEdge",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    description: (
      <p>
        CalEasy’s custom link generator has made it easier than ever for
        prospects to book calls.
        <Highlight>
          My conversion rate for booked demos has jumped by 30%.
        </Highlight>{" "}
        The tool pays for itself.
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "Operations Manager at TaskFlow",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        The simplicity of CalEasy is unmatched.
        <Highlight>
          I can set up a meeting link in seconds, integrated with my Google
          calendar.
        </Highlight>{" "}
        It’s the definition of efficiency.
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Head of Partnerships at ScaleNow",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        With CalEasy, we’ve cut our meeting scheduling process in half.
        <Highlight>
          The platform’s integrations just work — no setup headaches.
        </Highlight>{" "}
        Highly recommend it to any growing business.
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Client Success Lead at ThriveCo",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        I love how intuitive CalEasy is.
        <Highlight>
          Clients book themselves without any confusion, and I get more time for
          actual work.
        </Highlight>{" "}
        Scheduling has never been so stress-free.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Team Lead at ProConnect",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        Our team handles multiple calendars, and CalEasy keeps everything
        organized.
        <Highlight>
          Seamless syncing with Zoom and Google Meet means no missed
          connections.
        </Highlight>{" "}
        It’s a lifesaver for distributed teams.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
