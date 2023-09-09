import Link from "next/link";
import React from "react";

export default function LeftBar() {
  const menu = [
    {
      name: "Agilz",
      path: "/",
      icon: "🤷‍♂️",
    },
    {
      name: "teman",
      path: "/",
      icon: "🤷‍♂️",
    },
    {
      name: "kenangan",
      path: "/",
      icon: "🤷‍♂️",
    },
    {
      name: "tersimpan",
      path: "/",
      icon: "🤷‍♂️",
    },
    {
      name: "grup",
      path: "/",
      icon: "🤷‍♂️",
    },
  ];
  return (
    <ul className="flex flex-col text-md sticky top-20 font-semibold gap-y-2">
      {menu.map((m, index) => (
        <Link
          key={index}
          href={m.path}
          className="w-full  capitalize transition-all duration-100 ease-in py-2 hover:bg-base2 flex gap-x-1 items-center px-1 rounded-md"
        >
          {m.icon} {m.name}
        </Link>
      ))}
    </ul>
  );
}
