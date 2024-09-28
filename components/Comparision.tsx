import React from "react";
import { Compare } from "@/components/ui/Compare";
import NEU from "@/public/NEU.png"
import BG from "@/public/cloud.svg"

export function Comparision() {
  return (
    <div className="border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800">
      <Compare
        firstImage={NEU}
        secondImage={BG}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-40 w-40"
        slideMode="hover"
      />
    </div>
  );
}
