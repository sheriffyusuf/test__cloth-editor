import { Translate } from "next-translate";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

/**
 *
 * @param t - Translate function to default locale
 * @returns React Component
 */
export function Navbar({ t }: { t: Translate }) {
  return (
    <nav className="border-b border-b-slate-200 px-4 md:px-20 md:col-span-2 flex">
      <a href="/" className="flex my-auto py-4 px-4 -ml-4 font-semibold text-gray-300 hover:text-gray-500 hover:bg-slate-200">
        <IoArrowBack size="1.5em" />
        <span>/ {t`home:editor`}</span>
      </a>
      <button
        type="button"
        className="bg-gray-500 my-auto ml-auto border border-transparent py-3 px-6 flex items-center justify-center tracking-tighter font-semibold text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500">
        {t("home:cta", {
          amount: `£180`,
        })}
      </button>
    </nav>
  );
}
