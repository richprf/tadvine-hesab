"use client";

import React from "react";
import Card from "./Card";

interface CountryGridProps {
  items: any[];
}

const CountryGrid = ({ items }: CountryGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 p-6">
      {items.map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default CountryGrid;
