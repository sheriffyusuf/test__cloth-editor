import { Atoms } from "@recoil/constants";
import { atom } from "recoil";

/**
 * Typing Color to accept only the following
 */
enum Color {
  "Red",
  "Black",
  "Green",
  "Blue",
}

/**
 * Setting enum as default state
 */
const colorState: Color = Color.Black;

export const color = atom({
  key: Atoms.Colors,
  default: colorState,
});

export const size = atom({
  key: Atoms.Sizes,
  default: "S",
});
export const art = atom({
  key: Atoms.Arts,
  default: "",
});
export const frame = atom({
  key: Atoms.Frames,
  default: "",
});
