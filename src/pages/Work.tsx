import { ExternalLink } from "lucide-react";

import acadiaImage from "../assets/acadia-light.png";
import manateeImage from "../assets/manatee-light.png";
import navatticImage from "../assets/navattic.png";
import orinImage from "../assets/orinlabs-white.svg";
import spcImage from "../assets/spc.png";

type Work = {
  name: string;
  role: string;
  href?: string;
  image: string;
  imageClassName?: string;
  dateRange: string;
  description: React.ReactNode;
};

const work: Work[] = [
  {
    name: "Orin Labs",
    role: "Founder and CEO",
    href: "https://orinlabs.ai",
    dateRange: "2025-2026",
    image: orinImage,
    imageClassName: "p-2",
    description: (
      <p className="text-gray-700">
        Long-horizon agents for energy developers
      </p>
    ),
  },
  {
    name: "Acadia Learning",
    role: "Founder and CEO",
    href: "https://acadialearning.org",
    dateRange: "2024-2025",
    image: acadiaImage,
    imageClassName: "p-2",
    description: (
      <p className="text-gray-700">
        Personalized AI tutors for families
      </p>
    ),
  },
  {
    name: "South Park Commons",
    role: "Member",
    dateRange: "2024-2025",
    href: "https://www.southparkcommons.com",
    image: spcImage,
    description: null,
  },
  {
    name: "Navattic",
    role: "Software Lead",
    dateRange: "2023-2024",
    href: "https://www.navattic.com",
    image: navatticImage,
    imageClassName: "p-6",
    description: (
      <p className="text-gray-700">
        Led integrations, new products, and component libraries
      </p>
    ),
  },
  {
    name: "Manatee (YC S22)",
    role: "Founder and CEO",
    dateRange: "2021-2023",
    image: manateeImage,
    imageClassName: "p-2",
    description: (
      <p className="text-gray-700">
        SaaS for making sales demos, acq by Navattic
      </p>
    ),
  },
];

export default function Work() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-2xl">
      <h3 className="text-6xl font-bold">Work</h3>
      <p className="text-lg text-gray-700 italic">
        "Twenty years from now you will be more disappointed by the things that
        you didn't do than by the ones you did so." - Mark Twain
      </p>

      <hr className="my-4 border-gray-200" />

      <div className="-mx-2">
        {work.map((work) => (
          <a href={work.href} target="_blank" rel="noopener noreferrer">
            <div className="flex gap-4 items-center hover:bg-gray-100 group transition-colors p-2 rounded-lg">
              <img
                src={work.image}
                alt={work.name}
                className={`aspect-square rounded-lg w-24 h-24 shrink-0 bg-stone-100 group-hover:bg-white transition-colors ${work.imageClassName ?? "p-4"}`}
              />

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-bold transition-colors">
                    {work.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    ({work.dateRange})
                  </span>
                </div>
                <p className="text-gray-500 italic">{work.role}</p>
                {work.description}
              </div>

              {work.href && (
                <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-6 group-hover:-translate-x-4" />
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
