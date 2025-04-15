import React from "react";
import { DynamicHero } from "../components/DynamicHero";

export default function Page({ params }) {
  const { categ } = params;

  return (
    <div>
      <DynamicHero category={categ} />
    </div>
  );
}
