import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-[90%] md:w-[65%] mx-auto">
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Does CalEasy support automatic time zone detection?
        </AccordionTrigger>
        <AccordionContent>
          Yes! CalEasy automatically detects and adjusts time zones to ensure
          seamless scheduling for international meetings.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          Can I integrate CalEasy with Google and Outlook?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely! CalEasy syncs with Google Calendar, Outlook, and other
          scheduling platforms to prevent conflicts and double bookings.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>
          Does CalEasy offer AI-powered scheduling?
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
        <AccordionTrigger>Is CalEasy free to use?</AccordionTrigger>
        <AccordionContent>
          CalEasy offers a free tier with essential features. For premium
          features like AI scheduling and custom branding, we offer flexible
          paid plans.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
