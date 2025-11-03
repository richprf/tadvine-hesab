"use client";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-100 px-5 py-2 rounded-md shadow-md transition"
    >
      ← Back
    </Link>
  );
};

export default BackButton;
