import { RadioGroup } from "@headlessui/react";
import classNames from "@utils/classNames";
import { Translate } from "next-translate";
import React from "react";

type SizesProp = {
  name: string;
  inStock: boolean;
};

const sizes: SizesProp[] = [
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: false },
];

export function SizePicker({ t }: { t: Translate }) {
  const [selectedSize, setSelectedSize] = React.useState<SizesProp>(sizes[0]);
  return (
    <>
      <h2 className="font-medium text-lg mb-2">{t`home:size`}</h2>
      <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mb-5">
        <RadioGroup.Label className="sr-only">{t`home:size`}</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              className={({ active, checked }) =>
                classNames(
                  size.inStock ? "cursor-pointer focus:outline-none" : "opacity-25 cursor-not-allowed",
                  active ? "ring-2 ring-offset-2 ring-gray-500" : "",
                  checked
                    ? "bg-gray-500 border-transparent text-white hover:bg-gray-500"
                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                  "border py-4 px-3 flex items-center justify-center font-semibold uppercase sm:flex-1"
                )
              }
              disabled={!size.inStock}>
              <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
}
