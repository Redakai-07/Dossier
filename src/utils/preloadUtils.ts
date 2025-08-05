// Preload critical components for better user experience
export const preloadCriticalComponents = () => {
  // Preload the most commonly accessed components (excluding Navbar/Footer which are static)
  const preloadPromises = [
    import('../components/Hero/Hero'),
    import('../components/Skills/Skills'),
    import('../components/Projects/Projects')
  ];

  // Start preloading after a short delay to not block initial render
  setTimeout(() => {
    Promise.all(preloadPromises).catch(() => {
      // Silently handle preload failures
    });
  }, 1000);
};

// Preload specific route components
export const preloadRoute = (routePath: string) => {
  const routeComponents: Record<string, () => Promise<unknown>> = {
    '/': () => import('../models/Home/Home'),
    '/about': () => import('../models/AboutMe/AboutMe'),
    '/education': () => import('../components/Education/Education'),
    '/contact': () => import('../models/Contact/Contact'),
    '/under-construction': () => import('../models/UnderConstruction/UnderConstruction')
  };

  const preloadComponent = routeComponents[routePath];
  if (preloadComponent) {
    preloadComponent().catch(() => {
      // Silently handle preload failures
    });
  }
};

// Preload specific components on hover for better UX
export const preloadOnHover = {
  PDFModal: () => import('../components/PDFModal/PDFModal'),
  SplitText: () => import('../components/Split Text/SplitText'),
  CountUp: () => import('../components/Count Up/CountUp'),
  Hero: () => import('../components/Hero/Hero'),
  Skills: () => import('../components/Skills/Skills'),
  Projects: () => import('../components/Projects/Projects')
}; 