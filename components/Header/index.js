import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" ? "bg-white" : "" // Adjust background color based on theme
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className={`font-medium cursor-pointer mob:p-2 laptop:p-0 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          style={{ paddingLeft: '10px', fontWeight: 'bold' }}
        >
          {name}
        </h1>

        <div className="flex">
          <Button onClick={() => router.push("/")}> Home </Button>
          <Button onClick={() => router.push("/projects")}> Projects </Button>

          {mounted && theme && (
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <img
                className="h-6"
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                alt={theme === "dark" ? "Moon icon" : "Sun icon"}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
