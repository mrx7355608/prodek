import React from "react";
import { DynamicHero } from "../components/DynamicHero";
import About2 from "../components/pages-components/About2";
import Portfolio2 from "../components/pages-components/Portfolio2";
import Services2 from "../components/pages-components/Services2";
import Contact2 from "../components/pages-components/Contact2";
import Pricing2 from "../components/pages-components/Pricing2";

export default function Page({ params }) {
  const { categ } = params;

  return (
    <div>
      <DynamicHero category={categ} />
      {categ === "about" && <About2 />}
      {categ === "pricing" && <Pricing2 />}
      {categ === "services" && <Services2 />}
      {categ === "contact" && <Contact2 />}
      {categ === "portfolio" && <Portfolio2 />}
    </div>
  );
}
