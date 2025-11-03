"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";

import CountryGrid from "./CountryGrid";

import CountryPagination from "./PageInation";
import LoadingPlaceholder from "../common/LoadingPlaceholder";

const ITEMS_PER_PAGE = 8;

const CountryWrapper = () => {
  const { search, region } = useSelector((state: any) => state.search);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await axios.get("/api/countries");
      return res.data;
    },
  });

  const filtered = useMemo(() => {
    if (!data) return [];
    const searchValue = search?.toLowerCase()?.trim() || "";
    const regionValue = region?.toLowerCase()?.trim() || "";

    return data
      .filter((item: any) => item.name?.toLowerCase().includes(searchValue))
      .filter((item: any) =>
        regionValue ? item.region?.toLowerCase() === regionValue : true
      );
  }, [data, search, region]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentItems = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (isLoading) return <LoadingPlaceholder items={ITEMS_PER_PAGE} />;
  if (!filtered.length)
    return <p className="text-white text-center mt-10">No results found</p>;

  return (
    <div className="bg-slate-800 min-h-screen p-6">
      <CountryGrid items={currentItems} />

      <CountryPagination
        total={totalPages}
        current={page}
        onChange={setPage}
      />
    </div>
  );
};

export default CountryWrapper;
