import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import better from "@/public/better.png";
import { BorderBeam } from "@/components/magicui/border-beam";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc={better.src}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc={better.src}
        thumbnailAlt="Hero Video"
      />
      <BorderBeam duration={16} size={600} />
    </div>
  );
}
