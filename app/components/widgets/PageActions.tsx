import { FilterButton } from "@/app/components/FilterButton";
import { Filter } from "@/app/types";
import { memo } from "react";

type Props = {
  filter: Filter;
  onFilterChange: (arg0: Filter) => void;
  onOpenModal: VoidFunction;
};

export function PageActions({ filter, onFilterChange, onOpenModal }: Props) {
  return (
    <header className="flex justify-between">
      <div className="flex gap-2">
        {Object.values(Filter).map((f) => (
          <FilterButton key={f} filter={f} active={filter === f} onClick={onFilterChange} />
        ))}
      </div>
      <button
        onClick={onOpenModal}
        className="rounded-md px-4 py-2 button--filter hover:bg-blue-700 dark:hover:bg-blue-600"
      >
        Добавить новую задачу
      </button>
    </header>
  );
}
