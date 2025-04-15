import React from "react";

export const DynamicHero = ({ category }: { category: string }) => {
  const taglines: { [key: string]: string } = {
    services: "Your Growth Playbook - Services That Crush Goals",
    portfolio: "Proof In Motion - See Growth, Feel Growth",
    about: "200+ Brains, One Heartbeat – Your Growth Army Since 2001",
    contact: "Let's Make Magic - Drop Us a Line",
    pricing: "No Guesswork, Just Growth - Transparent Pricing For Every Budget",
  };

  const tagline = taglines[category];
  console.log({ category, tagline });

  return (
    <section className="relative flex items-center hero h-[90vh] lg:h-[110vh]">
      <div className="mx-auto px-4 max-w-6xl relative z-10 flex items-center h-full">
        <h1 className="pt-12 md:pt-0 max-w-4xl text-3xl md:text-5xl font-bold mb-4 lg:mb-6 text-white text-center">
          {tagline}
        </h1>
      </div>
      <img
        src="/vector-1.png"
        alt="ss"
        className="w-[100vw] absolute bottom-0"
      />
    </section>
  );
};
