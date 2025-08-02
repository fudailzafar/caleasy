"use client";

import { buttonVariants } from "@/app/components/ui/button";
import Link from "next/link";
import { AuthModal } from "@/app/components/AuthModal";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 bg-white dark:bg-gray-950">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
          404
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className={buttonVariants({ variant: "default" })}>
            <ArrowLeftCircle className="text-white dark:text-black size-4 mr-2" /> Go
            back
          </Link>
          <AuthModal text="Join Today!" />
        </div>
      </div>
    </main>
  );
}
