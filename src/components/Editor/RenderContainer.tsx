import { art } from "@recoil/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

export function RenderContainer() {
  const selectedArt = useRecoilValue(art);
  return (
    <>
      <div className="absolute top-[130px] left-[220px]">
        <img className="w-[174px] h-[274px] object-cover" src={selectedArt} />
      </div>
    </>
  );
}
