import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import { Suspense } from 'react';
import { Home, Education, AboutMe, Contact, PageNotFound, UnderConstruction } from './utils/dynamicImports';

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            } />
            <Route path="education" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Education />
              </Suspense>
            } />
            <Route path="about" element={
              <Suspense fallback={<LoadingSpinner />}>
                <AboutMe />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            } />
            <Route path="under-construction" element={
              <Suspense fallback={<LoadingSpinner />}>
                <UnderConstruction />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<LoadingSpinner />}>
                <PageNotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;