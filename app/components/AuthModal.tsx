"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";
import { cn } from "../lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { signInGithub, signInGoogle } from "../actions";

export function AuthModal({ text }: { text: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          <Image src={Logo} alt="Logo" className="size-5" />
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row justify-center items-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10" />
                                                                                                                
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <form action={signInGoogle} className="w-full">
            <GoogleAuthButton />
          </form>
          <form action={signInGithub}>
            <GitHubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
