import { RadioGroup } from "@headlessui/react";
import { color } from "@recoil/atoms";
import classNames from "@utils/classNames";
import React from "react";
import { useRecoilState } from "recoil";

type ColorsProp = {
  name: string;
  class: string;
}[];

const colors: ColorsProp = [
  { name: "Black", class: "bg-shirt-black" },
  { name: "Red", class: "bg-shirt-red" },
  { name: "Blue", class: "bg-shirt-blue" },
  { name: "Green", class: "bg-shirt-green" },
];

export function ColorPicker() {
  const [activeColor, setColor] = useRecoilState(color);
  return (
    <RadioGroup value={activeColor} onChange={setColor}>
      <div className="mt-1 grid grid-rows-4 gap-4">
        {colors.map((color, idx) => (
          <>
            {/* Black Color */}
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
          </>
        ))}
      </div>
    </RadioGroup>
  );
}
