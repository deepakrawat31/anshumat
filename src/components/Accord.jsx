"use client";

import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { useState } from "react";

export default function Accord() {
  let accord = [
    {
      id: 0,
      title: "trust",
      desc: "We ensure that every effort genuinely serves the communities we stand for.",
    },
    {
      id: 1,
      title: "mentorship",
      desc: "We guide individuals on their personal and professional journeys, helping them unlock opportunities and realize their potential.",
    },
    {
      id: 2,
      title: "social Impact",
      desc: "Our initiatives are designed to create meaningful social impact, fostering inclusive growth and driving positive change across communities.",
    },
  ];

  let [activeAccord, setActiveAccord] = useState(0);

  return (
    <ul className="flex flex-1 flex-col items-end gap-8">
      {accord.map((item) => (
        <li className="flex w-full max-w-xl flex-col gap-4" key={item.id}>
          <button
            className="border-b-surface-variant group flex cursor-pointer items-center justify-between gap-4 border-b py-2 text-lg uppercase"
            onClick={() => setActiveAccord(item.id)}
          >
            <span>{item.title}</span>
            {activeAccord === item.id ? (
              <span>
                <MinusIcon size={24} weight="bold" />
              </span>
            ) : (
              <span>
                <PlusIcon
                  size={24}
                  weight="bold"
                  className="transition-all group-hover:rotate-180"
                />
              </span>
            )}
          </button>
          {activeAccord === item.id && (
            <p className="text-pretty">{item.desc}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
