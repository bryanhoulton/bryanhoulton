import { ExternalLink } from "lucide-react";

type Artifact = {
  title: string;
  content: React.ReactNode;
  href?: string;
};

const artifacts: Artifact[] = [
  {
    title: "Horizon: A Learning Benchmark",
    href: "/research/horizon",
    content: (
      <p>
        A benchmark that measures an agent's ability to learn from past
        experience.
      </p>
    ),
  },
  {
    title: "Slate Design System",
    content: (
      <p>
        I'm a configurable component library nerd and maintain my own library
        for personal and professional use.
      </p>
    ),
    href: "https://ui.bryanhoulton.com",
  },
  {
    title: "Streamable LLM Memory",
    href: "https://memory.bryanhoulton.com/",
    content: (
      <p>
        Letting models do multi-hop reasoning over large memory banks in a
        single turn.
      </p>
    ),
  },
  {
    title: "Guide to Building Proactive Agents",
    href: "https://bryanhoulton1.substack.com/p/building-proactive-ai-agents",
    content: (
      <p>
        How we've built agents with dynamic-resolution memory, stateful tools,
        and more.
      </p>
    ),
  },
];

export default function Artifacts() {
  return (
    <div className="flex flex-col gap-8 p-6 max-w-2xl">
      <div className="flex flex-col gap-4">
        <h3 className="text-6xl font-bold">Showcase</h3>
        <p className="text-lg text-gray-700">
          Things I've built, mostly for fun.
        </p>
      </div>

      <hr className="border-gray-200" />

      <ul className="list-disc -mx-4">
        {artifacts.map((artifact) => (
          <a
            key={artifact.title}
            className="group"
            href={artifact.href}
            {...(artifact.href?.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <li
              className="flex flex-col gap-1 hover:bg-gray-100 rounded-md transition-all duration-300 p-4"
            >
              <div className="flex items-center gap-2">
                <h4 className="text-2xl font-bold">{artifact.title}</h4>
                {artifact.href && (
                  <ExternalLink
                    className="w-4 h-4 shrink-0 text-gray-400 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:transform-none"
                    aria-hidden="true"
                  />
                )}
              </div>
              {artifact.content}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
