import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export type DropdownProps = {
  selected: string,
  options: string[],
  onSelect: (option: string) => void,
  className?: string,
};

export function Dropdown({ selected, options, onSelect, className }: DropdownProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpened(!opened)}
        className={twMerge("flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500", className)}
      >
        <span>{selected}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${opened ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {opened && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                setOpened(false);
              }}
              className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}