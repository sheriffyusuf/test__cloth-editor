import { Navbar } from "@components";
import { RadioGroup } from "@headlessui/react";
import { color } from "@recoil/atoms";
import classNames from "@utils/classNames";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useRecoilState } from "recoil";
const Home: React.FC<{ defaultNamespace: string }> = ({ defaultNamespace }) => {
  const { t } = useTranslation(defaultNamespace);

  const [activeColor, setColor] = useRecoilState(color);
  return (
    <main className="md:h-screen grid grid-cols-1 md:grid-cols-1 md:grid-rows-[80px_1fr] overflow-hidden">
      <Navbar t={t} />
      <section>
        <aside className="px-4 md:px-20 flex h-full border-r border-r-slate-200">
          <div className="flex flex-col my-auto">
            <RadioGroup value={activeColor} onChange={setColor}>
              <RadioGroup.Label className="block text-sm font-medium text-gray-700">Size</RadioGroup.Label>
              <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <RadioGroup.Option
                  as="div"
                  value="Black"
                  className={({ active }) =>
                    classNames(
                      active ? "ring-2 ring-indigo-500" : "",
                      "relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none"
                    )
                  }>
                  {({ active, checked }) => (
                    <>
                      <div
                        className={classNames(
                          active ? "border" : "border-2",
                          checked ? "border-indigo-500" : "border-transparent",
                          "absolute -inset-px rounded-lg pointer-events-none"
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          </div>
          <h2>{t`home:pick`}</h2>
          <div></div>
        </aside>
        <aside>
          <p>{t("home:cta", { amount: `£180` })}</p>
          <p>{t`home:details`}</p>
        </aside>
      </section>
    </main>
  );
};

export default Home;
