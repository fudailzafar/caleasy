"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/favicon.png";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";
import { Button, buttonVariants } from "./ui/button";
import { signInGithub, signInGoogle } from "../actions";
import { cn } from "../lib/utils";

export function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn(buttonVariants({ variant: "outline" }), "text-black dark:text-white")}>
          Login 
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex flex-row justify-center items-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10" />
          <h4 className="text-3xl font-semibold">
            Cal<span className="text-primary">Easy</span>
          </h4>
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
