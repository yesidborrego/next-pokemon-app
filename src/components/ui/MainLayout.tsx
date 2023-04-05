import { FC, useEffect, useState } from "react";
import { IMainLayout } from "@/interfaces";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/themes";
import { getDocumentTheme } from "@nextui-org/react";

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  const isDarkInit: boolean = Boolean(
    typeof window !== "undefined" && localStorage.getItem("theme-mode")
  );
  const [isDark, setIsDark] = useState(isDarkInit);

  useEffect(() => {
    setIsDark(isDarkInit);

    const observer = new MutationObserver(() => {
      setIsDark(isDarkInit);
    });

    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return () => observer.disconnect();
  }, [isDarkInit]);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <div>{children}</div>
    </NextUIProvider>
  );
};
