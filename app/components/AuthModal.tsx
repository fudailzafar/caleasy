import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { signIn } from "../lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";
import { FiArrowRight } from "react-icons/fi";

export function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex h-10 items-center justify-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:pl-2 hover:text-white active:bg-neutral-700 dark:text-black dark:hover:text-white">
          <span className="rounded-full bg-blue-600 p-1 text-sm transition-colors duration-300 group-hover:bg-white">
            <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-blue-600 group-active:-rotate-45" />
          </span>
          <span>Try for free</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row justify-center items-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10" />
          <h4 className="text-3xl font-semibold">
            Cal<span className="text-primary">Easy</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
            className="w-full"
          >
            <GoogleAuthButton />
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <GitHubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
