"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/favicon.ico";
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
        <DialogHeader>
          <h4 className="text-2xl font-medium">Sign Up</h4>
          <DialogTitle className="text-sm font-normal">
          Use your Google account below to sign up
        </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col mt-5 gap-3">
          <form action={signInGoogle} className="w-full">
            <GoogleAuthButton text={"Sign up with Google"} />
          </form>
          <form action={signInGithub} className="hidden">
            <GitHubAuthButton text={"Sign up with GitHub"}/>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
