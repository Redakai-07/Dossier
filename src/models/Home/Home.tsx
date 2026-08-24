import { Suspense } from 'react';
import { Hero, Skills, Projects } from '../../utils/dynamicImports';
import NextChapter from '../../components/NextChapter/NextChapter';

// Loading component for child components
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const Home = () => {
  return (
    <div>
      <Suspense fallback={<ComponentLoader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Projects />
      </Suspense>

      <NextChapter
        nextPage={{
          chapterNumber: "Page: 02 / 04",
          title: "Academic Journey & Credentials",
          description: "Discover my degrees in Software Engineering at MANIT Bhopal & SKSJTI, plus verified professional certifications.",
          path: "/education",
          badgeText: "NEXT SECTION"
        }}
      />
    </div>
  );
};

export default Home;