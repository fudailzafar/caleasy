import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-[90%] md:w-[65%] mx-auto">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How is CalFudail better than Calendly?
        </AccordionTrigger>
        <AccordionContent>
          CalFudail offers advanced scheduling flexibility, AI-powered meeting
          recommendations, and deeper integrations with third-party tools,
          making it more powerful than Calendly.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Does CalFudail support automatic time zone detection?
        </AccordionTrigger>
        <AccordionContent>
          Yes! CalFudail automatically detects and adjusts time zones to ensure
          seamless scheduling for international meetings.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          Can I integrate CalFudail with Google and Outlook?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely! CalFudail syncs with Google Calendar, Outlook, and other
          scheduling platforms to prevent conflicts and double bookings.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          Does CalFudail offer AI-powered scheduling?
        </AccordionTrigger>
        <AccordionContent>
          Yes! Our AI assistant suggests the best meeting times based on
          availability, preferences, and previous scheduling patterns.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Can I personalize my booking links?</AccordionTrigger>
        <AccordionContent>
          Yes! You can create branded, customizable booking links with your
          name, company, and meeting types.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Is CalFudail free to use?</AccordionTrigger>
        <AccordionContent>
          CalFudail offers a free tier with essential features. For premium
          features like AI scheduling and custom branding, we offer flexible
          paid plans.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
