"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  item: {
    alpha3Code: string;
    name: string;
    flags: { png: string };
    population: number;
    region: string;
    capital: string;
  };
  index: number;
}

const Card = ({ item, index }: CardProps) => {
  return (
    <Link href={`/${item.alpha3Code}`}>
      <div key={index} className="bg-gray-700 pb-6 rounded-md cursor-pointer">
        <div className="relative w-full h-40">
          <Image
            src={item.flags.png}
            alt={item.name}
            fill
            className="object-cover rounded-t"
          />
        </div>
        <div className="grid grid-cols-1 pl-4">
          <h1 className="font-bold pt-4">{item.name}</h1>

          <div className="flex gap-2 pt-4">
            population:{" "}
            <span className="text-gray-400">
              {item.population.toLocaleString()}
            </span>
          </div>

          <div className="flex gap-2">
            region: <span className="text-gray-400">{item.region}</span>
          </div>

          <div className="flex gap-2">
            capital: <span className="text-gray-400">{item.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

