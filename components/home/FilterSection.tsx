"use client";

import React from "react";
import CommonInput from "../common/CommonInput";
import FilterAutocomplete from "../common/AutoCompleted";
import { useDispatch } from "react-redux";
import { setSearch } from "@/redux/slices/search";

const FilterSection = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row justify-between px-8 gap-4 md:gap-0">
      <div className="w-full md:w-auto">
        <CommonInput
          placeholder="Search for a country..."
          type="text"
          onChange={(e: any) => dispatch(setSearch(e.target.value))}
        />
      </div>

      <div className="w-full md:w-auto">
        <FilterAutocomplete />
      </div>
    </div>
  );
};

export default FilterSection;
