"use client";

import { buttonVariants } from "@/components/ui/button";
import { getRoutesFlatten } from "@/lib/routes-config";
import Link from "next/link";
import { useVersion } from "./context/version";

export default function GetStarted() {
  const { currentVersion } = useVersion();
  const routes = getRoutesFlatten(currentVersion);
  return (
    <Link
      href={`/docs/${currentVersion}${routes[0].href}`}
      className={buttonVariants({ className: "px-6 bg-indigo-600", size: "lg" })}
    >
      Ler Documentação
    </Link>
  );
}
