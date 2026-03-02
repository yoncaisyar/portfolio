import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import TopControls from './components/TopControls/TopControls';
import SideProgress from './components/SideProgress/SideProgress';
import MobileScrollUI from './components/MobileScrollUI/MobileScrollUI';
import Hero from './components/Hero/Hero';
import IntroScreen from './components/IntroScreen/IntroScreen';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ThemeProvider>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      <div className="app">
        <Navbar />
        <div className="topBar">
          <TopControls />
        </div>
        <SideProgress />
        <MobileScrollUI />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
