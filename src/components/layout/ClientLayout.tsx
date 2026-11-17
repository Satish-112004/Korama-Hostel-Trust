"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AiAssistant } from "@/components/interactive/AiAssistant";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  return (
    <>
      <Navbar onOpenAiAssistant={() => setAiAssistantOpen(true)} />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
      <AiAssistant
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        onOpen={() => setAiAssistantOpen(true)}
      />
    </>
  );
}
