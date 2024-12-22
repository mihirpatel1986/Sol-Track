"use client";

import { Button } from "@/components/ui/button/Button";

export const TabButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Button
      type="button"
      variant={active ? "secondary" : "ghost"}
      className="w-full dark text-sm px-5 py-2.5 me-2 mb-2"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
