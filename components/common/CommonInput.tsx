"use client";

export default function CommonInput({ placeholder, type, onChange }: any) {
  return (
    <div className="relative w-full max-w-md">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          py-2 pl-10 pr-4
          text-black
          
          rounded-md
          border-none
          focus:outline-none
          focus:ring-0
          placeholder:text-gray-600
        "
      />

      <span className="absolute inset-y-0 left-3 flex items-center text-gray-600 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>
    </div>
  );
}
