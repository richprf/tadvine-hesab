import React from "react";

const CountryInfo = ({ data }: { data: any }) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = data;

  return (
    <div className="flex-1 space-y-6">
      <h2 className="text-3xl font-bold text-white">{name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Native Name:</span>{" "}
            {nativeName || "—"}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {population?.toLocaleString() || "—"}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {region || "—"}
          </p>
          <p>
            <span className="font-semibold">Sub Region:</span>{" "}
            {subregion || "—"}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {capital || "—"}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Top Level Domain:</span>{" "}
            {topLevelDomain?.join(", ") || "—"}
          </p>
          <p>
            <span className="font-semibold">Currencies:</span>{" "}
            {currencies?.map((c: any) => c.name).join(", ") || "—"}
          </p>
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {languages?.map((l: any) => l.name).join(", ") || "—"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
