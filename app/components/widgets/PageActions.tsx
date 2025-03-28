import { FilterButton } from "@/app/components/FilterButton";
import { Filter } from "@/app/types";
import { FormEvent, memo, SelectHTMLAttributes } from "react";

type Props = {
  filter: Filter;
  onFilterChange: (arg0: Filter) => void;
  onOpenModal: VoidFunction;
};

export function PageActions({ filter, onFilterChange, onOpenModal }: Props) {
  return (
    <header className="flex justify-between gap-3 flex-col md:flex-row mb-8">
      <div className="hidden sm:flex gap-2 justify-between">
        {Object.values(Filter).map((f) => (
          <FilterButton key={f} filter={f} active={filter === f} onClick={onFilterChange} />
        ))}
      </div>
      <select className="sm:hidden form__input" value={filter} onChange={(e) => onFilterChange(e.target.value as Filter)}>
        {Object.values(Filter).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button
        onClick={onOpenModal}
        className="rounded-md px-4 py-2 button--filter hover:bg-blue-700 dark:hover:bg-blue-600"
      >
        Добавить новую задачу
      </button>
    </header>
  );
}
