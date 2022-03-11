import useTranslation from "next-translate/useTranslation";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import i18nConfig from "../i18n.json";

const { locales } = i18nConfig;

const Home: React.FC<{ defaultNamespace: string }> = ({ defaultNamespace }) => {
  const { t, lang } = useTranslation(defaultNamespace);
  return (
    <main className="md:h-screen grid grid-cols-1 md:grid-cols-[1fr_0.65fr] md:grid-rows-[80px_1fr] overflow-hidden">
      <nav className="border-b border-b-slate-200 px-20 md:col-span-2 flex">
        <a href="#" className="flex items-center justify-center px-8 font-semibold hover:bg-gray-50">
          <IoArrowBack size="1.5em" />
          <span>/ {t`home:editor`}</span>
        </a>
      </nav>
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
