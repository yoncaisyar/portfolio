import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import TopControls from './components/TopControls/TopControls';
import SideProgress from './components/SideProgress/SideProgress';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <TopControls />
        <SideProgress />
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
