import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function Card() {
  const card = [
    {
      id: 0,
      title: "donate",
      desc: "Every contribution helps create real, lasting impact.",
    },
    {
      id: 1,
      title: "volunteer",
      desc: "Take action and be a part of the change.",
    },
    {
      id: 2,
      title: "partner",
      desc: "Collaborate with us to drive innovation and amplify impact together.",
    },
  ];

  return (
    <ul className="flex flex-wrap gap-4">
      {card.map((item) => (
        <li
          key={item.id}
          className="bg-surface-container text-on-surface-container group flex flex-1 flex-col justify-between gap-4 p-4"
        >
          <h4 className="flex items-center justify-between gap-4 text-2xl capitalize">
            <span>{item.title}</span>
            <span className="relative isolate aspect-square h-6 overflow-hidden">
              <ArrowRightIcon
                size={24}
                weight="bold"
                className="absolute inset-0 z-10 transition-all duration-300 group-hover:translate-x-full"
              />
              <ArrowRightIcon
                size={24}
                weight="bold"
                className="absolute inset-0 z-10 -translate-x-full transition-all duration-300 group-hover:translate-x-0"
              />
            </span>
          </h4>
          <p className="text-pretty">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}
