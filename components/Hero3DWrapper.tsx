"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(
  () => import("@/components/Hero3D").then((mod) => mod.Hero3D),
  {
    ssr: false,
    loading: () => (
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="relative z-10 text-center px-4">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-muted rounded-full mx-auto mb-8" />
            <div className="h-16 w-96 bg-muted rounded-lg mx-auto mb-6" />
            <div className="h-8 w-72 bg-muted rounded-lg mx-auto" />
          </div>
        </div>
      </section>
    ),
  }
);

export function Hero3DWrapper() {
  return <Hero3D />;
}
