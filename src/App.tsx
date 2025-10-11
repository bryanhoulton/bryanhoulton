import { useState } from 'react';

import {
  ArrowRightIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

import Artifacts from './pages/Artifacts';
import Bids from './pages/Bids';
import Home from './pages/Home';
import Music from './pages/Music';
import People from './pages/People';
import Quotes from './pages/Quotes';
import Work from './pages/Work';

type NavButton = {
  label: string;
  description: string;
  href: string;
  component: React.ComponentType;
};

const navButtons: NavButton[] = [
  { label: "Home", href: "/", description: "hi :)", component: Home },
  {
    label: "Work",
    href: "/work",
    description: "where i spend my time",
    component: Work,
  },

  {
    label: "Artifacts",
    href: "/artifacts",
    description: "proof i existed",
    component: Artifacts,
  },
  {
    label: "Bids",
    href: "/bids",
    description: "i'll pay you to yap",
    component: Bids,
  },
  {
    label: "People",
    href: "/people",
    description: "algorithmic networking",
    component: People,
  },
  {
    label: "Quotes",
    href: "/quotes",
    description: "words that are spicy",
    component: Quotes,
  },
  {
    label: "Album Wall",
    href: "/music",
    description: "neural loops go weee",
    component: Music,
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="absolute inset-0 h-screen bg-white flex flex-col md:block">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900">Bryan Houlton</h1>
            <span className="text-sm text-gray-500">brhoulton@gmail.com</span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          >
            <div
              className="fixed left-0 top-0 h-full w-full bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">
                  Bryan Houlton
                </h1>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-0.5">
                {navButtons.map((button) => (
                  <Link
                    to={button.href}
                    key={button.label}
                    onClick={closeMobileMenu}
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
          </div>
        )}

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-12 h-full">
          <div className="col-span-3 max-h-full flex flex-col p-8 gap-4">
            <h1 className="text-4xl font-bold text-gray-900 px-2">
              Bryan<br></br>Houlton
            </h1>

            <span className="text-sm text-gray-500 px-2 -mt-2">
              brhoulton@gmail.com
            </span>

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
              {navButtons.map((page) => (
                <Route path={page.href} element={<page.component />} />
              ))}
            </Routes>
          </div>
        </div>

        {/* Mobile Content Area */}
        <div className="md:hidden flex-1 min-h-0 overflow-y-auto">
          <Routes>
            {navButtons.map((page) => (
              <Route path={page.href} element={<page.component />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
