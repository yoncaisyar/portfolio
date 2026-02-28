import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import TopControls from './components/TopControls/TopControls';
import SideProgress from './components/SideProgress/SideProgress';
import Hero from './components/Hero/Hero';
import './styles/global.css';

const Projects = lazy(() => import('./components/Projects/Projects'));
const Contact  = lazy(() => import('./components/Contact/Contact'));
const Footer   = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <div className="topBar">
          <TopControls />
        </div>
        <SideProgress />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
