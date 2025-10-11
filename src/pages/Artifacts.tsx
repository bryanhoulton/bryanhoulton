type Artifact = {
  date: string;
  title: string;
  content: React.ReactNode;
  href?: string;
};

const artifacts: Artifact[] = [
  {
    date: "2024-?",
    title: "Slate",
    content: (
      <p>
        I'm a configurable component library nerd and maintain{" "}
        <a
          href="https://ui.bryanhoulton.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 p-1 underline rounded-md hover:bg-primary-50 transition-colors inline-block px-1 -mx-0.5"
        >
          my own library
        </a>
        for personal and professional use.
      </p>
    ),
    href: "https://ui.bryanhoulton.com",
  },
  {
    title: "Proactive Agent API",
    href: "https://proactiveagentcompany.com/",
    content: (
      <p>An easy way to host proactive agents. Email me for an API key.</p>
    ),
    date: "fall 2025",
  },
  {
    date: "mid-2025",
    title: "Generative Interface Abstract Syntax Tree (GIAST)",
    content: (
      <p>
        A way for LLMs to output JSON-schema-compliant stateful,
        design-constrained UI. Shipped with a lexer, parser, and compiler but
        can be used as structured output type.
      </p>
    ),
    href: "https://giast.vercel.app/",
  },
  {
    title: "Tablet",
    href: "https://tablet-ecru.vercel.app/",
    content: (
      <p>
        A collaborative document editor for argumentation. Coherence not
        guaranteed.
      </p>
    ),
    date: "2024",
  },
  {
    title: "Poddlo",
    href: "https://www.poddlo.com/",
    content: <p>A stale search engine for podcasts.</p>,
    date: "2024",
  },
  {
    href: "https://senior-pjia6v0ek-bryan-houlton.vercel.app/",
    title: "Senior Dev",
    content: <p>Will comment rudely on all of your PRs.</p>,
    date: "2024",
  },
];

export default function Artifacts() {
  return (
    <div className="flex flex-col gap-8 p-6 max-w-2xl">
      <h3 className="text-7xl font-bold">Artifacts</h3>

      <ul className="list-disc -mx-4">
        {artifacts.map((artifact) => (
          <a href={artifact.href} target="_blank" rel="noopener noreferrer">
            <li
              key={artifact.title}
              className="flex flex-col gap-2 hover:bg-gray-100 rounded-md transition-all duration-300 p-4"
            >
              <span className="text-sm text-gray-500">{artifact.date}</span>
              <h4 className="text-2xl font-bold">{artifact.title}</h4>
              {artifact.content}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
