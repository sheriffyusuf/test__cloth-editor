import { Atoms } from "@recoil/constants";
import { atom } from "recoil";

export const color = atom({
  key: Atoms.Color,
  default: "black",
});
export const size = atom({
  key: Atoms.Size,
  default: "S",
});
export const art = atom({
  key: Atoms.Art,
  default: "",
});
export const frame = atom({
  key: Atoms.Frame,
  default: "",
});
