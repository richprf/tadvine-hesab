"use client";

import { Pagination } from "@heroui/react";

interface CountryPaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
}

const CountryPagination = ({ total, current, onChange }: CountryPaginationProps) => {
  if (total <= 1) return null; 

  return (
    <div className="flex justify-center mt-10">
      <Pagination
        total={total}
        page={current}
        onChange={onChange}
        color="primary"
        showShadow
        variant="bordered"
      />
    </div>
  );
};

export default CountryPagination;
