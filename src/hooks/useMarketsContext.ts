import { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router";

export interface ContextType {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  currentIRTPage: number;
  setCurrentIRTPage: Dispatch<SetStateAction<number>>;
  currentUSDTPage: number;
  setCurrentUSDTPage: Dispatch<SetStateAction<number>>;
}

export default function useMarketsContext() {
  return useOutletContext<ContextType>();
}
