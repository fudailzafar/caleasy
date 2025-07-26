import { Icons } from "@/app/components/icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "CalEasy",
  description: "Automate your time with CalEasy",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Calendar", "Meetings", "Time Management", "Scheduler"],
  links: {
    email: "fudail.zafar@gmail.com",
    twitter: "https://twitter.com/fudailzafar",
    github: "https://github.com/fudailzafar",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "Smart Scheduling",
          description: "Streamline your workflow with CalEasy",
          href: "/#solution",
        },
        items: [
          {
            href: "/#solution",
            title: "Custom-Link Generation",
            description: "Your meeting? Your personal link.",
          },
          {
            href: "/#solution",
            title: "Time Optimization",
            description: "Saved 15+ hours soo far.",
          },
          {
            href: "/#solution",
            title: "Easy Scheduling",
            description: "We schedule meetings in < 1 min.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "Video Demo",
            href: "/#video",
            description: "Simple video for on-boarding new users.",
          },
          {
            title: "3-Step Launch",
            href: "/#howitworks",
            description: "3 steps to understand everything.",
          },
          {
            title: "More stuff...",
            href: "/#features2",
            description:
              "For people who would like to understand the plaform even better.",
          },
          {
            title: "Changelog",
            href: "#",
            description: "Updates on what is added and what has been added.",
          },
          {
            title: "Reviews",
            href: "/#testimonials",
            description: "Check out what other people are saying about us.",
          },
          {
            title: "Contact",
            href: "/#FAQ",
            description: "Have more queries? Click here.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  faqs: [
    {
      question: "What is CalEasy?",
      answer: (
        <span>
          CalEasy is a platform that helps you build and manage your AI-powered
          applications. It provides tools and services to streamline the
          development and deployment of AI solutions.
        </span>
      ),
    },
    {
      question: "How can I get started with CalEasy?",
      answer: (
        <span>
    {`      You can get started with CalEasy by signing up for an account on our
          website, creating a meeting link, and copy the booking link. We're in
          process to make an easy on-boarding tutorial.`}
        </span>
      ),
    },
    {
      question: "What types of meeting platforms does CalEasy support?",
      answer: (
        <span>
          CalEasy supports a wide range of video platforms, including but not
          limited to Google Meet, Zoom, and Microsoft Teams. We continuously
          update our platform to support the latest video technologies.
        </span>
      ),
    },
    {
      question: "Is CalEasy suitable for beginners in meeting scheduling?",
      answer: (
        <span>
          Yes, CalEasy is designed to be user-friendly for both new-users and
          experienced people. We offer easy-to-use interfaces, easy-integration,
          and videos to help users of all skill levels schedule meetings.
        </span>
      ),
    },
    {
      question: "What kind of support does CalEasy provide?",
      answer: (
        <span>
          {`As we're a small team, providing support is now a crucial aspect which
          we're trying to improve. We currently provide e-mail support and
          videos for assisting you in booking your meetings!`}
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "https://x.com/fudailzafar",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "https://github.com/fudailzafar",
          text: "GitHub",
          icon: <FaGithub />,
        },
        {
          href: "https://linkedin.com/in/fudailzafar",
          text: "LinkedIn",
          icon: <FaLinkedin />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
