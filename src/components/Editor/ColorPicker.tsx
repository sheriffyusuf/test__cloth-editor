import { RadioGroup } from "@headlessui/react";
import { color } from "@recoil/atoms";
import classNames from "@utils/classNames";
import React from "react";
import { useRecoilState } from "recoil";

type ColorsProp = {
  name: string;
  class: string;
}[];

// TODO: Regression with maintaining color code from tailwind config
// FIXME: Look for solution as to why using named color stops working after a period of time
const colors: ColorsProp = [
  { name: "Black", class: "bg-[#1a1a1a]" },
  { name: "Red", class: "bg-[#fb0000]" },
  { name: "Blue", class: "bg-[#005ba9]" },
  { name: "Green", class: "bg-[#006300]" },
];

export function ColorPicker() {
  const [activeColor, setColor] = useRecoilState(color);
  return (
    <RadioGroup value={activeColor} onChange={setColor}>
      <div className="mt-1 grid grid-rows-4 gap-4">
        {colors.map((color, idx) => (
          <RadioGroup.Option
            as="div"
            key={idx}
            value={color.name}
            className={({ active, checked }) =>
              classNames(
                active && checked ? "ring-2" : "",
                !active && checked ? "ring-2" : "",
                "-m-0.5 relative p-0.5 flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500 hover:ring-2"
              )
            }>
            <RadioGroup.Label as="p" className="sr-only">
              {color.name}
            </RadioGroup.Label>
            <span
              aria-hidden="true"
              className={classNames(color.class, "bg-black h-8 md:h-14 w-8 md:w-14 border border-black border-opacity-10")}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
