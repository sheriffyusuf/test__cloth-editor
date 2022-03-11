import Model from "@public/img/shirt.png";
import { color } from "@recoil/atoms";
import classNames from "@utils/classNames";
import Image from "next/image";
// import classNames from "@utils/classNames";
import React from "react";
import { useRecoilValue } from "recoil";

const Hue = {
  Black: "hue-rotate-[360deg] saturate-0 brightness-50",
  Red: "hue-rotate-[0deg]",
  Blue: "hue-rotate-[200deg]",
  Green: "hue-rotate-[100deg]",
};

export function Shirt() {
  const selectedColor = useRecoilValue(color);
  return (
    <div className={classNames(Hue[selectedColor], "w-full filter")}>
      <Image src={Model} layout="responsive" objectFit="contain" loading="lazy" placeholder="blur" objectPosition="center" alt="" />
    </div>
  );
}
