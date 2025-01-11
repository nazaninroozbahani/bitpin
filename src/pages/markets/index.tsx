import { ContextType } from "@/hooks/useMarketsContext";
import { useState } from "react";
import { Outlet } from "react-router";

export default function MArkets() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentIRTPage, setCurrentIRTPage] = useState(1);
  const [currentUSDTPage, setCurrentUSDTPage] = useState(1);

  return (
    <Outlet
      context={
        {
          activeTab,
          setActiveTab,
          currentIRTPage,
          setCurrentIRTPage,
          currentUSDTPage,
          setCurrentUSDTPage,
        } satisfies ContextType
      }
    />
  );
}
