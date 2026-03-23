"use client";

import { Button } from "@/app/components/ui/button";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import GitHubLogo from "@/public/github.svg";
import { cn } from "@/app/lib/utils";
import { FaGoogle } from "react-icons/fa";

interface iAppProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
}

export function SubmitButton({ text, variant, className }: iAppProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className={cn("w-fit", className)}>
          <Loader2 className="size-4 mr-2 animate-spin" /> Please Wait
        </Button>
      ) : (
        <Button
          type="submit"
          variant={variant}
          className={cn("w-fit", className)}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export function GoogleAuthButton({ text }: { text: String }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full gap-1">
          <FaGoogle className="size-4 mr-2 text-primary"/>
          {text}
        </Button>
      )}
    </>
  );
}

export function GitHubAuthButton({ text }: { text: String }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="size-4 mr-2 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button variant="outline" className="w-full">
          <Image src={GitHubLogo} alt="GitHub Logo" className="size-4 mr-2" />
          {text}
        </Button>
      )}
    </>
  );
}
