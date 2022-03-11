import { ArtworkPicker, ColorPicker, FramePicker, Navbar, RenderContainer, Shirt, SizePicker } from "@components";
import useTranslation from "next-translate/useTranslation";
import React from "react";

const Home: React.FC<{ defaultNamespace: string }> = ({ defaultNamespace }) => {
  const { t } = useTranslation(defaultNamespace);

  return (
    <main className="md:h-screen grid grid-cols-1 md:grid-cols-1 md:grid-rows-[80px_1fr] overflow-hidden">
      <Navbar t={t} />
      <section className="grid grid-cols-1 md:grid-cols-[1fr_0.65fr] main__content">
        {/* Left Section */}
        <aside className="px-4 md:px-20 flex h-full min-h-full border-r border-r-slate-200">
          <div className="flex flex-col my-auto">
            <ColorPicker />
          </div>
          <div className="my-auto w-full xl:max-w-[650px] relative">
            <Shirt />
            <RenderContainer />
          </div>
        </aside>
        {/* Right Section */}
        <aside className="px-6 md:p-20 min-h-full overflow-y-auto">
          <ArtworkPicker t={t} />
          <FramePicker t={t} />
          <SizePicker t={t} />
          <p className="text-gray-200">{t`home:details`}</p>
        </aside>
      </section>
    </main>
  );
};

export default Home;
