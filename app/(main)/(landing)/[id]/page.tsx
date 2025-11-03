"use client";

import CountryDetail from "@/components/homeDetail/HomeDetail";
import { useParams } from "next/navigation";


export default function Page() {
  const params = useParams();
  const id = params?.id as string;

  return <CountryDetail id={id} />;
}
