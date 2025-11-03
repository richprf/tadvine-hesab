"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BackButton from "./BackButton";

import CountryBorders from "./CountryBorders";
import CountryInfo from "./CardInfo";

const CountryDetail = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countryDetail", id],
    queryFn: async () => {
      const res = await axios.get(`/api/countries/${id}`);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-300">
        Loading...
      </div>
    );

  if (isError || !data)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-400">
        Failed to load country data.
      </div>
    );

  const { flags, borders } = data;

  return (
    <section className="px-6 md:px-20 py-10 bg-gray-900 text-gray-200 min-h-screen">
      <BackButton />

      <div className="mt-10 flex flex-col md:flex-row gap-16 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <Image
            src={flags?.svg || flags?.png}
            alt={data.name}
            width={600}
            height={400}
            className="rounded-md shadow-lg w-full h-auto"
          />
        </div>

        <div className="flex-1">
          <CountryInfo data={data} />
          <CountryBorders borders={borders} />
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
