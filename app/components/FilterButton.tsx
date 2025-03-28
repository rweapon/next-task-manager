import { Filter } from "@/app/types";
import { memo } from "react";

type Props = {
  filter: Filter;
  active: boolean;
  onClick: (filter: Filter) => void;
};

export const FilterButton = memo(function FilterButton({ filter: buttonFilter, active, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(buttonFilter)}
      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${active ? "button--filter" : "button"}`}
    >
      {buttonFilter.charAt(0).toUpperCase() + buttonFilter.slice(1)}
    </button>
  );
});
