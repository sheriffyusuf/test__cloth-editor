import { RadioGroup } from "@headlessui/react";
import { art } from "@recoil/atoms";
import classNames from "@utils/classNames";
import { Translate } from "next-translate";
import React from "react";
import { useRecoilState } from "recoil";

const Arts = [
  { url: "img/art1.jpg", alt: "Alt Art 1" },
  { url: "img/art2.jpg", alt: "Alt Art 2" },
  { url: "img/art3.jpg", alt: "Alt Art 3" },
  { url: "img/art4.jpg", alt: "Alt Art 4" },
];

/**
 *
 * @param t - Translate function to default locale
 * @returns React Component
 */
export function ArtworkPicker({ t }: { t: Translate }) {
  const [activeArt, setArt] = useRecoilState(art);
  return (
    <>
      <h2 className="font-medium text-xl">{t`home:pick`}</h2>
      <RadioGroup
        value={activeArt}
        onChange={setArt}
        className="relative w-full flex gap-4 snap-x snap-mandatory overflow-y-hidden overflow-x-auto py-6 px-2">
        {Arts.map((art, idx) => (
          <RadioGroup.Option
            as="div"
            key={idx}
            value={art.url}
            className={({ active, checked }) =>
              classNames(
                active && checked ? "ring-2" : "",
                !active && checked ? "ring-2" : "",
                "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500 hover:ring-2"
              )
            }>
            <RadioGroup.Label as="p" className="sr-only">
              {art.alt}
            </RadioGroup.Label>
            <div className="w-[132px] h-[132px] snap-start scroll-mx-6 shrink-0">
              <img className="w-full h-full object-contain bg-gray-50" src={art.url} />
            </div>
          </RadioGroup.Option>
        ))}
        <div className="snap-start scroll-mx-6 shrink-0">
          <div className="shrink-0 w-3 sm:w-2 sm:-ml-[2px]"></div>
        </div>
      </RadioGroup>
    </>
  );
}
