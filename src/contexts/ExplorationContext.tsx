import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export interface ExplorationPage {
  path: string;
  name: string;
  shortName: string;
  number: string;
  icon: string;
}

export const DOSSIER_PAGES: ExplorationPage[] = [
  {
    path: '/',
    name: 'Home & Projects',
    shortName: 'Home',
    number: '01',
    icon: '💼',
  },
  {
    path: '/education',
    name: 'Academic & Credentials',
    shortName: 'Education',
    number: '02',
    icon: '🎓',
  },
  {
    path: '/about',
    name: 'Mindset & Story',
    shortName: 'About',
    number: '03',
    icon: '👤',
  },
  {
    path: '/contact',
    name: 'Connect & Reach Out',
    shortName: 'Contact',
    number: '04',
    icon: '✉️',
  },
];

interface ExplorationContextType {
  visitedPages: string[];
  percentage: number;
  homeScrollProgress: number;
  isFullyExplored: boolean;
  pages: ExplorationPage[];
  isPageVisited: (path: string) => boolean;
}

const ExplorationContext = createContext<ExplorationContextType | undefined>(undefined);

const SESSION_VISITED_KEY = 'dossier_session_visited_pages_v4';
const SESSION_HOME_SCROLL_KEY = 'dossier_session_home_scroll_v4';

export const ExplorationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Visited pages across session (e.g. ['/education', '/about', '/contact'])
  const [visitedPages, setVisitedPages] = useState<string[]>(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_VISITED_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Home scroll progress (5% initial on Home, scaling up to 25% at bottom)
  const [homeScrollProgress, setHomeScrollProgress] = useState<number>(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_HOME_SCROLL_KEY);
      return saved ? Number(saved) : 5;
    } catch {
      return 5;
    }
  });

  // Track page visits
  useEffect(() => {
    const currentPath = location.pathname;
    const isOtherPage = ['/education', '/about', '/contact'].includes(currentPath);

    if (isOtherPage && !visitedPages.includes(currentPath)) {
      const updated = [...visitedPages, currentPath];
      setVisitedPages(updated);
      try {
        sessionStorage.setItem(SESSION_VISITED_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
    }
  }, [location.pathname, visitedPages]);

  // Robust scroll calculation for Home page ('/')
  const calculateScroll = useCallback(() => {
    if (location.pathname !== '/') return;

    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      1200
    );
    const winHeight = window.innerHeight || document.documentElement.clientHeight || 800;
    const maxScrollable = Math.max(1, docHeight - winHeight);
    const scrollRatio = Math.min(1, Math.max(0, scrollY / maxScrollable));

    // Scales smoothly from 5% at the top of Home up to 25% at the bottom
    const currentProgress = Math.min(25, Math.max(5, Math.round(5 + scrollRatio * 20)));

    setHomeScrollProgress(prev => {
      if (currentProgress > prev) {
        try {
          sessionStorage.setItem(SESSION_HOME_SCROLL_KEY, String(currentProgress));
        } catch (e) {
          console.error(e);
        }
        return currentProgress;
      }
      return prev;
    });
  }, [location.pathname]);

  // Attach scroll & resize listeners and poll briefly on route change
  useEffect(() => {
    if (location.pathname !== '/') return;

    calculateScroll();

    // Poll a few times after mount to catch dynamically rendered components
    const timer1 = setTimeout(calculateScroll, 300);
    const timer2 = setTimeout(calculateScroll, 1000);
    const timer3 = setTimeout(calculateScroll, 2000);

    const onScroll = () => {
      requestAnimationFrame(calculateScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname, calculateScroll]);

  // Calculate cumulative percentage:
  // Home scroll progress: 5% to 25%
  // Each other page visited (/education, /about, /contact): 25% each
  const otherPagesCount = ['/education', '/about', '/contact'].filter(p => visitedPages.includes(p)).length;
  const otherPagesProgress = otherPagesCount * 25;

  const totalPercentage = Math.min(100, Math.max(5, homeScrollProgress + otherPagesProgress));
  const isFullyExplored = totalPercentage >= 100;

  const isPageVisited = (path: string) => {
    if (path === '/') return homeScrollProgress >= 20;
    return visitedPages.includes(path);
  };

  return (
    <ExplorationContext.Provider
      value={{
        visitedPages,
        percentage: totalPercentage,
        homeScrollProgress,
        isFullyExplored,
        pages: DOSSIER_PAGES,
        isPageVisited,
      }}
    >
      {children}
    </ExplorationContext.Provider>
  );
};

export const useExploration = () => {
  const context = useContext(ExplorationContext);
  if (!context) {
    throw new Error('useExploration must be used within an ExplorationProvider');
  }
  return context;
};
