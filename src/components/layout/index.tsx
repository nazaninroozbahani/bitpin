import { ReactNode, useEffect, useState } from "react";
import Sun from "@/assets/icons/sun-light.svg";
import Moon from "@/assets/icons/moon.svg";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  const darkModeHandler = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="p-8 min-h-screen dark:bg-[rgb(var(--bg-sb-default))] text-gray-900 dark:text-white">
      <button
        onClick={() => darkModeHandler()}
        className="w-6 h-6 ml-auto block"
      >
        <img src={dark ? Sun : Moon} />
      </button>
      {children}
    </div>
  );
}
