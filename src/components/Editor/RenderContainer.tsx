import { art, frame } from "@recoil/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

export function RenderContainer() {
  const selectedArt = useRecoilValue(art);
  const selectedFrame = useRecoilValue(frame);
  return (
    <>
      <div className="absolute top-[70px] md:top-[130px] left-[110px] md:left-[220px]">
        <img className="w-[80px] md:w-[174px] h-[100px] md:h-[274px] object-cover relative" src={selectedArt} />
        {selectedFrame !== "" ? (
          <img
            className="w-[80px] h-[100px] md:w-[200px] md:h-[280px] object-fill absolute -top-[2px] left-0 min-w-full transform scale-105"
            src={selectedFrame}
          />
        ) : null}
      </div>
    </>
  );
}
