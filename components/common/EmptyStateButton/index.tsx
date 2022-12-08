import { UserGroupIcon } from "@heroicons/react/24/outline";
import React from "react";

type TProps = { label: string; handleClick: (arg?: any) => void };

export const EmptyStateButton = ({ label, handleClick }: TProps) => {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-500 px-12 py-4 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2"
      onClick={handleClick}
    >
      <UserGroupIcon className="mx-auto w-12 h-12 text-gray-400" />
      <span className="mt-2 block text-sm font-medium text-gray-300">
        {label}
      </span>
    </button>
  );
};
