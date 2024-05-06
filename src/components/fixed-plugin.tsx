"use client";
import ButtonComponent from "@/shared/ButtonComponent";

export function FixedPlugin() {
  return (
    <a href="https://www.ansgar-sachs.de/" target="_blank">
      <ButtonComponent
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
       
        Made With ❤️ by Ansgar
      </ButtonComponent>
    </a>
  );
}
