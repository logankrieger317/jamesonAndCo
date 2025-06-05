import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Book from './components/ui/Book';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import DevTeam from './components/features/DevTeam';
import Short from './components/sizes/Short';
import Large from './components/sizes/Large';
import Long from './components/sizes/Long';
import To14 from './components/sizes/To14';
import Addons from './components/features/Addons';
import Faq from './components/pages/Faq';
import Help from './components/pages/Help';
import Error from './components/pages/Error';
import BlogPage from './components/blog/BlogPage';
import Sales from './components/pages/Sales';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/devteam" element={<DevTeam />} />
        <Route path="/to14" element={<To14 />} />
        <Route path="/large" element={<Large />} />
        <Route path="/long" element={<Long />} />
        <Route path="/short" element={<Short />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/help" element={<Help />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/error" element={<Error />} />
        {/* Catch-all route to handle undefined paths */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
