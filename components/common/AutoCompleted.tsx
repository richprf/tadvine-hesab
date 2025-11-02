"use client";

import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useDispatch } from "react-redux";
import { setRegion } from "@/redux/slices/search";

const regions = [
  { label: "Africa", key: "Africa" },
  { label: "Americas", key: "Americas" },
  { label: "Asia", key: "Asia" },
  { label: "Europe", key: "Europe" },
  { label: "Oceania", key: "Oceania" },
];

export default function FilterAutocomplete() {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        label="Filter by region"
        defaultItems={regions}
        onSelectionChange={(key:any) => {
          // اگر key از نوع Set باشه، مقدار واقعی رو ازش بیرون می‌کشیم
          const selected =
            key instanceof Set ? Array.from(key)[0] : key;

          dispatch(setRegion(selected ? selected.toString() : ""));
        }}
      >
        {(item) => (
          <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
