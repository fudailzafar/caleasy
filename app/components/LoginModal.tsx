"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/favicon.ico";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";
import { Button, buttonVariants } from "./ui/button";
import { signInGithub, signInGoogle } from "../actions";
import { cn } from "../lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";

export function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: "outline" }),
            "text-black dark:text-white",
          )}
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="">
          <h4 className="text-2xl font-semibold">Login </h4>
          <DialogTitle className="text-sm font-normal">
          Use your Google account below to login
        </DialogTitle>
        </DialogHeader>
    
        <div className="flex flex-col mt-- gap-3">
          <form action={signInGoogle} className="w-full">
            <GoogleAuthButton text={"Login with Google"} />
          </form>
          <form action={signInGithub} className="hidden">
            <GitHubAuthButton text={"Log in with GitHub"} />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
