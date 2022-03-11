import { Translate } from "next-translate";
import React from "react";

/**
 *
 * @param t - Translate function to default locale
 * @returns React Component
 */
export function ArtworkPicker({ t }: { t: Translate }) {
  return (
    <>
      <h2 className="font-medium text-xl">{t`home:pick`}</h2>
    </>
  );
}
