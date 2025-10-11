import { ArrowRightIcon } from 'lucide-react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';
import People from './pages/People';
import Predictions from './pages/Predictions';
import Quotes from './pages/Quotes';
import Work from './pages/Work';

type NavButton = {
  label: string;
  description: string;
  href: string;
};

const navButtons: NavButton[] = [
  { label: "Home", href: "/", description: "hi :)" },
  { label: "Work", href: "/work", description: "where i spend my time" },
  {
    label: "Quotes",
    href: "/quotes",
    description: "the quotes i'm thinking about",
  },
  {
    label: "Album Wall",
    href: "/music",
    description: "the music i'm listening to",
  },
];

function App() {
  return (
    <Router>
      <div className="absolute inset-0 h-screen grid grid-cols-12 bg-white">
        <div className="col-span-3 max-h-full flex flex-col p-8 gap-4">
          <h1 className="text-4xl font-bold text-gray-900 px-2">
            Bryan<br></br>Houlton
          </h1>

          <div className="flex flex-col grow gap-0.5 min-h-0 overflow-y-auto">
            {navButtons.map((button) => (
              <Link
                to={button.href}
                key={button.label}
                className="rounded-lg hover:bg-gray-100 p-2 group flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-neutral-800">
                    {button.label}
                  </h2>
                  <p className="text-sm text-neutral-500">
                    {button.description}
                  </p>
                </div>

                <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:-translate-x-2" />
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-9 min-h-0 h-full py-8 overflow-y-auto bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/work" element={<Work />} />
            <Route path="/music" element={<Music />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/predictions" element={<Predictions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
