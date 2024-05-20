"use client";

import ButtonComponent from "@/components/shared/ButtonComponent";
import Link from "next/link";

export default function BackToMainSection() {
  return (
    <div className="mx-auto w-[400px]">
      <Link href="/">
        <ButtonComponent
          color="amber"
          className="flex items-center justify-center gap-3"
        >
          <strong>↩️</strong>Zurück
        </ButtonComponent>
      </Link>
    </div>
  );
}
