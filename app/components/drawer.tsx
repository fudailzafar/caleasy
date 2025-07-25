import { Icons } from "@/app/components/icons";
import { buttonVariants } from "@/app/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  DrawerDescription,
  DrawerTitle,
} from "@/app/components/ui/drawer";
import { siteConfig } from "@/app/lib/config";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AuthModal } from "./AuthModal";
import { ThemeToggle } from "./ThemeToggle";
import { LoginModal } from "./LoginModal";

export default function drawerDemo() {
  return (
    <Drawer>
      <ThemeToggle />
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>
          <VisuallyHidden>Navigation</VisuallyHidden>
        </DrawerTitle>
        <DrawerDescription>
          <VisuallyHidden>Navigation</VisuallyHidden>
        </DrawerDescription>
        <DrawerHeader className="px-6">
          <div className="">
            <Link
              href="/"
              title="brand-logo"
              className="relative mr-6 flex items-center space-x-2"
            >
              <Icons.logo className="w-auto h-[40px]" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </Link>
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {siteConfig.header.map((item, index) => (
                <li key={index} className="my-3">
                  {item.trigger ? (
                    <span className="font-semibold">{item.trigger}</span>
                  ) : (
                    <Link href={item.href || ""} className="font-semibold">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <LoginModal />
          <AuthModal text={"Get Started Today"}/>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
