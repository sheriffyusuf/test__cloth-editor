import Model from "@public/img/shirt.png";
import { color } from "@recoil/atoms";
import classNames from "@utils/classNames";
import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";

// This is mutable, to fix this subsequently, try checking the resource below
// https://masteringjs.io/tutorials/fundamentals/enum
const Hue = {
  Black: "hue-rotate-[360deg] saturate-0 brightness-50",
  Red: "hue-rotate-[0deg]",
  Blue: "hue-rotate-[200deg]",
  Green: "hue-rotate-[100deg]",
};

export function Shirt() {
  const selectedColor = useRecoilValue(color);
  return (
    <div className={classNames(Hue[selectedColor], "w-full filter relative")}>
      <Image src={Model} layout="responsive" objectFit="contain" loading="lazy" placeholder="blur" objectPosition="center" alt="" />
    </div>
  );
}
