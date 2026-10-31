import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  ArrowRightIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';
import { useLocation, useNavigationType } from 'react-router-dom';

import Artifacts from './pages/Artifacts';
import Bids from './pages/Bids';
import Home from './pages/Home';
import Music from './pages/Music';
import Quotes from './pages/Quotes';
import Work from './pages/Work';

type NavButton = {
  label: string;
  description: string;
  id: string;
  component: React.ComponentType;
};

const navButtons: NavButton[] = [
  { label: "Home", id: "home", description: "hi :)", component: Home },
  {
    label: "Work",
    id: "work",
    description: "where i spend my time",
    component: Work,
  },

  {
    label: "Showcase",
    id: "artifacts",
    description: "favorite projects",
    component: Artifacts,
  },
  {
    label: "Bids",
    id: "bids",
    description: "i'll pay you to yap",
    component: Bids,
  },
  {
    label: "Quotes",
    id: "quotes",
    description: "words that are spicy",
    component: Quotes,
  },
  {
    label: "Album Wall",
    id: "music",
    description: "neural loops go weee",
    component: Music,
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(navButtons[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigationType = useNavigationType();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string, behavior: ScrollBehavior = "smooth") => {
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
    window.history.replaceState(window.history.state, "", id === "home" ? "/" : `#${id}`);
  };

  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const storageKey = `personal-site:scroll:${location.key}`;
    let savedPosition: string | null = null;
    if (navigationType === "POP") {
      try {
        savedPosition = sessionStorage.getItem(storageKey);
      } catch {
        // Navigation still works when browser storage is unavailable.
      }
    }

    const updateActive = () => {
      const containerTop = container.getBoundingClientRect().top;
      const threshold = container.clientHeight / 3;
      const atBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 2;

      let current = navButtons[0].id;
      for (const { id } of navButtons) {
        const section = document.getElementById(id);
        if (
          section &&
          section.getBoundingClientRect().top - containerTop <= threshold
        ) {
          current = id;
        }
      }
      setActiveId(atBottom ? navButtons[navButtons.length - 1].id : current);
    };

    const initialId =
      window.location.hash.slice(1) ||
      window.location.pathname.replace(/^\/+|\/+$/g, "");
    if (savedPosition !== null && Number.isFinite(Number(savedPosition))) {
      container.scrollTop = Math.max(0, Number(savedPosition));
    } else if (navButtons.some((button) => button.id === initialId)) {
      document.getElementById(initialId)?.scrollIntoView({ block: "start" });
    }
    updateActive();

    let lastScrollTop = container.scrollTop;
    const onScroll = () => {
      lastScrollTop = container.scrollTop;
      updateActive();
    };
    const saveScroll = () => {
      try {
        sessionStorage.setItem(storageKey, String(lastScrollTop));
      } catch {
        // Storage may be disabled in private or restricted browser sessions.
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", saveScroll);
    window.addEventListener("resize", updateActive);
    return () => {
      saveScroll();
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", saveScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [location.key, navigationType]);

  const navLinkClass = (id: string) =>
    `rounded-lg hover:bg-gray-100 p-2 group flex items-center justify-between ${
      activeId === id ? "bg-gray-100" : ""
    }`;

  return (
    <div className="absolute inset-0 h-screen bg-white flex flex-col md:grid md:grid-cols-12">
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
                <a
                  href={`#${button.id}`}
                  key={button.label}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    scrollToSection(button.id);
                  }}
                  className={navLinkClass(button.id)}
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
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex col-span-3 max-h-full flex-col p-8 gap-4">
        <h1 className="text-4xl font-bold text-gray-900 px-2">
          Bryan<br></br>Houlton
        </h1>

        <span className="text-sm text-gray-500 px-2 -mt-2">
          brhoulton@gmail.com
        </span>

        <div className="flex flex-col grow gap-0.5 min-h-0 overflow-y-auto">
          {navButtons.map((button) => (
            <a
              href={`#${button.id}`}
              key={button.label}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(button.id);
              }}
              className={navLinkClass(button.id)}
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
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto bg-white md:col-span-9 md:h-full"
      >
        {navButtons.map((page) => (
          <section key={page.id} id={page.id} className="md:py-8">
            <page.component />
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
