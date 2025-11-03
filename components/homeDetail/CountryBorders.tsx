import React from "react";

const CountryBorders = ({ borders }: { borders: string[] }) => {
  if (!borders || borders.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <span className="font-semibold">Border Countries:</span>
      {borders.map((border) => (
        <span
          key={border}
          className="px-4 py-1 bg-gray-700 rounded-md text-sm shadow-sm"
        >
          {border}
        </span>
      ))}
    </div>
  );
};

export default CountryBorders;
