import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Navbar } from "./../src/components";

const Home: React.FC<{ defaultNamespace: string }> = ({ defaultNamespace }) => {
  const { t, lang } = useTranslation(defaultNamespace);
  return (
    <main className="md:h-screen grid grid-cols-1 md:grid-cols-[1fr_0.65fr] md:grid-rows-[80px_1fr] overflow-hidden">
      <Navbar t={t} />
      <section>
        <header>
          <h2>{t`home:pick`}</h2>
          <div></div>
        </header>
        <aside>
          <p>{t("home:cta", { amount: `£180` })}</p>
          <p>{t`home:details`}</p>
        </aside>
      </section>
    </main>
  );
};

export default Home;
