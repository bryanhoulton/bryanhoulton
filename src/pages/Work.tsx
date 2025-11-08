import { ExternalLink } from 'lucide-react';

import manateeImage from '../assets/manatee.png';
import orinImage from '../assets/orin.png';
import startupShellImage from '../assets/shell.png';

type Work = {
  name: string;
  href?: string;
  image: string;
  dateRange: string;
  description: React.ReactNode;
};

const work: Work[] = [
  {
    name: "Orin Labs",
    dateRange: "2025-now",
    href: "https://orinlabs.org",
    image: orinImage,
    description: (
      <p className="text-gray-700">
        Solving teaching. We're{" "}
        <a
          href="https://orinlabs.org/hiring"
          className="text-primary-600 p-1 underline rounded-md hover:bg-primary-50 transition-colors inline-block px-1 -mx-0.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          hiring
        </a>
        .
      </p>
    ),
  },
  {
    name: "Manatee",
    dateRange: "2022-2024",
    image: manateeImage,
    description: (
      <p className="text-gray-700">
        Distributed web-app caching/replay for GTM teams, YC S22.
      </p>
    ),
  },
  {
    name: "Startup Shell",
    dateRange: "2020-now",
    image: startupShellImage,
    description: (
      <p className="text-gray-700">
        UMD's home for creators and entrepreneurs.
      </p>
    ),
  },
];

export default function Work() {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-2xl">
      <h3 className="text-7xl font-bold">Work</h3>
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
                className="aspect-square rounded-lg w-24 h-24 shrink-0"
              />

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-bold transition-colors">
                    {work.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    ({work.dateRange})
                  </span>
                </div>
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
