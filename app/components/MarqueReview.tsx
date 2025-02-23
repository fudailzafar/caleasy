import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "CalFudail has completely streamlined my meeting scheduling. No more back-and-forth emails!",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Way better than Calendly! The custom scheduling options are a game-changer for my team.",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "I love how seamless the time zone detection is. My international meetings have never been this easy to schedule!",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    name: "Diana",
    username: "@diana",
    body: "The integrations with Google and Outlook are flawless. Everything just works!",
    img: "https://avatar.vercel.sh/diana",
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "The AI-powered scheduling suggestions save me so much time. Why isn’t everyone using this?",
    img: "https://avatar.vercel.sh/ethan",
  },
  {
    name: "Fiona",
    username: "@fiona",
    body: "The UI is so clean, and I love the personalized booking links. Makes scheduling a breeze!",
    img: "https://avatar.vercel.sh/fiona",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="max-w-2xl mx-auto lg:text-center">
        <p className="font-semibold leading-7 text-primary">Schedule faster</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Effortless Scheduling, Happy Users!
        </h1>
        <p className="mt-6 text-base leading-snug text-muted-foreground">
          See why professionals love CalFudail! From seamless integrations to
          AI-powered scheduling, our users enjoy a smarter way to book
          meetings—without the hassle.
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s] pt-24">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
