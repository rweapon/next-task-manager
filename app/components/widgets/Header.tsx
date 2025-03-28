"use client";

import { ThemeToggle } from "@/app/components/ThemeToggle";
import { ListTodo } from "lucide-react";
import { memo } from "react";

export const Header = memo(function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListTodo className="size-8" />
          <h1 className="text-3xl font-bold">Менеджер задач</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
});
