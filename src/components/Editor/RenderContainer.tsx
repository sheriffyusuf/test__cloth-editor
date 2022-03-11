import { art, frame } from "@recoil/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

export function RenderContainer() {
  const selectedArt = useRecoilValue(art);
  const selectedFrame = useRecoilValue(frame);
  return (
    <>
      <div className="absolute top-[130px] left-[220px]">
        <img className="w-[174px] h-[274px] object-cover relative" src={selectedArt} />
        {selectedFrame !== "" ? (
          <img className="w-[200px] h-[280px] object-fill absolute -top-[2px] left-0 min-w-full transform scale-105" src={selectedFrame} />
        ) : null}
      </div>
    </>
  );
}
