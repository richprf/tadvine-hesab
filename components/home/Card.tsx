import Image from "next/image";
import React from "react";

const Card = ({ item, index }: any) => {
  return (
    <div key={index} className="bg-gray-700 pb-6 rounded-md">
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
        <p className="flex gap-2 pt-4">
          population:{" "}
          <p className="text-gray-400"> {item.population.toLocaleString()} </p>
        </p>
        <p className="flex gap-2">
          region: <p className="text-gray-400"> {item.region} </p>
        </p>
        <p className="flex gap-2">
          capital: <p className="text-gray-400"> {item.capital} </p>
        </p>
      </div>
    </div>
  );
};

export default Card;
