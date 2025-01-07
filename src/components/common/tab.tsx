import { ReactNode } from "react";

interface Props {
  tabs: {
    id: number;
    title: string;
    content: ReactNode;
  }[];
  activeTab: number;
  onTabChange: (id: number) => void;
}

export default function Tab({ tabs, activeTab, onTabChange }: Props) {
  const onTabClick = (id: number) => {
    onTabChange(id);
  };
  return (
    <>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer p-4 border-b-2 ${
                activeTab === tab.id
                  ? "text-bitpingreen border-bitpingreen"
                  : "hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => onTabClick(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      {tabs.map((tab) => (
        <div key={tab.id} className={`pt-4 ${activeTab === tab.id ? "block" : "hidden"}`}>
          {tab.content}
        </div>
      ))}
    </>
  );
}
