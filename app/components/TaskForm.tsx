"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValue, Priority, TaskFormValues } from "@/app/types";
import { FormInputs, taskSchema } from "@/app/configs";

type Props = {
  onSubmit: (data: TaskFormValues) => void;
  initialValues?: TaskFormValues;
};

export function TaskForm({ onSubmit, initialValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: initialValues || {
      [FormValue.title]: "",
      [FormValue.description]: "",
      [FormValue.priority]: Priority.medium,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 sm:space-y-4 *:space-y-2">
      <div>
        <label htmlFor={FormValue.title} className="form__input-label">
          {FormInputs[FormValue.title].label}
        </label>
        <input
          id={FormValue.title}
          type="text"
          {...register(FormValue.title)}
          className="form__input"
          placeholder={FormInputs[FormValue.title].placeholder}
        />
        {errors[FormValue.title] && <p className="text-sm text-red-500">{errors[FormValue.title].message}</p>}
      </div>

      <div>
        <label htmlFor={FormValue.description} className="form__input-label">
          {FormInputs[FormValue.description].label}
        </label>
        <textarea
          id={FormValue.description}
          {...register(FormValue.description)}
          className="form__input"
          placeholder={FormInputs[FormValue.title].placeholder}
          rows={3}
        />
        {errors[FormValue.description] && (
          <p className="text-sm text-red-500">{errors[FormValue.description].message}</p>
        )}
      </div>

      <div>
        <label htmlFor={FormValue.priority} className="form__input-label">
          {FormInputs[FormValue.priority].label}
        </label>
        <select id={FormValue.priority} {...register(FormValue.priority)} className="form__input">
          {Object.entries(Priority).map(([value, label]) => (
            <option key={value} value={label}>
              {label}
            </option>
          ))}
        </select>
        {errors[FormValue.priority] && <p className="text-sm text-red-500">{errors[FormValue.priority].message}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-md  px-4 py-2 button--filter hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:hover:bg-blue-600"
      >
        {initialValues ? "Изменить задачу" : "Добавить задачу"}
      </button>
    </form>
  );
}
