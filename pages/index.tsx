import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import i18nConfig from "../i18n.json";

const { locales } = i18nConfig;

const Home: React.FC<{ defaultNamespace: string }> = ({ defaultNamespace }) => {
  const { t, lang } = useTranslation(defaultNamespace);
  return (
    <div>
      <header>
        <h2>{t`home:title`}</h2>
        <div>
          {locales.map((lng) => (
            <Link href="/" passHref locale={lng} key={lng}>
              <a>{t(`common:language.${lng}`)}</a>
            </Link>
          ))}
        </div>
      </header>
      <main>
        <p>{t("common:greet", { name: t`common:world` })}</p>
        <p>{t`home:someText`}</p>
      </main>
      <footer>
        <a href="https://github.com/vinissimus/next-translate" target="_blank" rel="noopener noreferrer">
          {t`common:documentation`}
        </a>
      </footer>
    </div>
  );
};

export default Home;
