"use client";

import { ThemeToggle } from "@/app/components/ThemeToggle";
import { ListTodo } from "lucide-react";
import Link from "next/link";
import { memo } from "react";

export const Header = memo(function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <Link className="flex items-center gap-2" href="/">
        <ListTodo className="size-8" />
        <h1 className="text-xl sm:text-3xl font-bold">Менеджер задач</h1>
      </Link>
      <ThemeToggle />
    </header>
  );
});
