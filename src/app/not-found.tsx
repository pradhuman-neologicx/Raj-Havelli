"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image similar to PageHeader */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/404-bg.png"
          alt="404 Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-primary/40 md:bg-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto space-y-8 mt-24">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-8xl md:text-9xl font-serif text-white/90 font-bold tracking-tighter drop-shadow-lg">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white drop-shadow-md">
            Page Not Found
          </h2>
          <p className="text-lg text-white/80 max-w-md mx-auto">
            We apologize, but the page you are looking for has either been moved or no longer exists.
            Please return to our homepage to continue exploring Raj Haveli.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Link
            href="/"
            className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto" })}
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/20 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
