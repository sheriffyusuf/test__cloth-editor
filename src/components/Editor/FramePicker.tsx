import { RadioGroup } from "@headlessui/react";
import { frame } from "@recoil/atoms";
import classNames from "@utils/classNames";
import { Translate } from "next-translate";
import React from "react";
import { IoBan } from "react-icons/io5";
import { useRecoilState } from "recoil";

const Frames = [
  { url: "", alt: "No Frame" },
  { url: "img/frame2.png", alt: "Alt Art 2" },
  { url: "img/frame3.png", alt: "Alt Art 3" },
  { url: "img/frame4.png", alt: "Alt Art 4" },
];

/**
 *
 * @param t - Translate function to default locale
 * @returns React Component
 */
export function FramePicker({ t }: { t: Translate }) {
  const [activeFrame, setFrame] = useRecoilState(frame);
  return (
    <>
      <h2 className="font-medium text-lg">{t`home:select`}</h2>
      <RadioGroup
        value={activeFrame}
        onChange={setFrame}
        className="relative w-full flex gap-4 snap-x snap-mandatory overflow-y-hidden overflow-x-auto pt-2 pb-6 px-2 -ml-[6px] mb-5">
        {Frames.map((frame, idx) => (
          <RadioGroup.Option
            as="div"
            key={idx}
            value={frame.url}
            className={({ active, checked }) =>
              classNames(
                active && checked ? "ring-2" : "",
                !active && checked ? "ring-2" : "",
                "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500 hover:ring-2"
              )
            }>
            <RadioGroup.Label as="p" className="sr-only">
              {frame.alt}
            </RadioGroup.Label>

            <div className="w-[132px] h-[132px] snap-start scroll-mx-6 shrink-0 bg-gray-50">
              {frame.url === "" ? (
                <div className="flex text-xl w-full h-full">
                  <IoBan size="2.5em" className="m-auto" />
                </div>
              ) : (
                <img className="w-full h-full object-contain" src={frame.url} />
              )}
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
