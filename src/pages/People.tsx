import { ExternalLink } from 'lucide-react';

type Person = {
  name: string;
};

type Source = {
  name: string;
  url: string;
  done: boolean;
};

const discoveryQueue: Source[] = [
  { name: "Guzey's People", url: "https://guzey.com/people/", done: true },
  { name: "New Science", url: "https://newscience.org/", done: true },
  {
    name: "MATS Program Mentors",
    url: "https://www.matsprogram.org/mentors",
    done: true,
  },
  {
    name: "Emergent Ventures Cohorts",
    url: "https://marginalrevolution.com/?s=cohort",
    done: true,
  },
  {
    name: "Suspended Reason > Friends",
    url: "https://suspendedreason.github.io/",
    done: true,
  },
  {
    url: "https://sf2.sh/",
    done: true,
    name: "SF2",
  },
  {
    url: "https://fr8manifes.to/",
    done: false,
    name: "FR8",
  },
  {
    url: "https://www.livetheresidency.com/about",
    done: false,
    name: "The Residency",
  },
  {
    url: "https://joinarcadia.org/",
    done: false,
    name: "Arcadia",
  },
  {
    url: "https://brain.maxxyung.com/lists/talent",
    done: false,
    name: "Maxx Yung's List",
  },
  {
    url: "https://www.jklsnt.com/",
    done: false,
    name: "sanity",
  },
  {
    url: "https://www.776.org/fellows",
    done: false,
    name: "776 Fellows",
  },
];

const toMeet: Person[] = [
  { name: "David Rosenthal" },
  { name: "Ben Gilbert" },
  { name: "Kudzo Ahegbebu" },
  { name: "Sholto Douglas" },
  { name: "Claire Birch" },
  { name: "Tyler Cowen" },
  { name: "Gytis Daujotas" },
  { name: "Dwarkesh Patel" },
  { name: "Gavin Leech" },
  { name: "John Collison" },
  { name: "John Phamous" },
  { name: "Jeffery Wang (Exa)" },
  { name: "Ivan Yevenko" },
  { name: "Alexey Guzey" },
];

export default function People() {
  return (
    <div className="flex flex-col gap-8 p-6 max-w-2xl">
      <div className="flex flex-col gap-4">
        <h3 className="text-7xl font-bold">People</h3>
        <p className="text-lg text-gray-700">
          High agency people tend to congregate together. If you find one,
          you'll probably find more. I use this page to algorithmically expand
          into those groups.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h4 className="text-2xl font-bold">To Meet</h4>
          <p className="text-gray-700">
            If you know one of these people, I will pay you to introduce us. No
            particular order.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ul className="list-disc list-inside">
            {toMeet.map((person) => (
              <li key={person.name}>{person.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h4 className="text-2xl font-bold">Discovery Queue</h4>
          <p className="text-gray-700">Where I'm looking for new people.</p>
        </div>
        <div className="flex flex-col">
          <ul className="list-disc list-inside">
            {discoveryQueue.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center"
              >
                <li className="group-hover:underline">
                  {source.done && "✅ "}
                  {source.name}
                </li>
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
