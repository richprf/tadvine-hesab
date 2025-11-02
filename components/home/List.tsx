import React from "react";
import CountryWrapper from "./CountryWrapper";
import FilterSection from "./FilterSection";

const List = () => {
  return (
    <div className="p-20">
      <FilterSection />
      <CountryWrapper />
    </div>
  );
};

export default List;
