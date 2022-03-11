import { ColorPicker, Navbar, Shirt } from "@components";
import { color } from "@recoil/atoms";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useRecoilValue } from "recoil";

const Home: React.FC<{ defaultNamespace: string }> = ({ defaultNamespace }) => {
  const { t } = useTranslation(defaultNamespace);
  const selectedColor = useRecoilValue(color);

  return (
    <main className="md:h-screen grid grid-cols-1 md:grid-cols-1 md:grid-rows-[80px_1fr] overflow-hidden">
      <Navbar t={t} />
      <section className="grid grid-cols-1 md:grid-cols-[1fr_0.65fr]">
        {/* Left Section */}
        <aside className="px-4 md:px-20 flex h-full border-r border-r-slate-200">
          <div className="flex flex-col my-auto">
            <ColorPicker />
          </div>
          <div className="my-auto w-full xl:max-w-[650px]">
            <Shirt />
          </div>
        </aside>
        {/* Right Section */}
        <aside className="px-6 md:p-20 overflow-y-auto">
          <h2>{t`home:pick`}</h2>

          <p>{t("home:cta", { amount: `£180` })}</p>
          <p>{t`home:details`}</p>
        </aside>
      </section>
    </main>
  );
};

export default Home;
