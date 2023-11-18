import { ChevronsRight } from "lucide-react";
import React from "react";
/**
 * @param {{breadCrumbs: {href: (string|null); label: string;}[]}} props
 */
export default function Breadcrumb({ breadCrumbs }) {
  return (
    <>
      <div className="w-full px-4 py-2 rounded-md flex gap-2 bg-seven-bg-bread items-center text-seven-font-size-default">
        <a href="/">SIX</a>
        {breadCrumbs.map((elmt, index) => (
          <React.Fragment key={index}>
            <ChevronsRight className="text-[#ccc]" size={10} />
            {elmt.href ? (
              <a href={elmt.href}>{elmt.label}</a>
            ) : (
              <span>{elmt.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
