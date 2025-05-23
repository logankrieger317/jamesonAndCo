import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Book from './components/Book';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import DevTeam from './components/DevTeam';
import Short from './components/Short';
import Large from './components/Large';
import Long from './components/Long';
import To14 from './components/To14';
import Addons from './components/Addons';
import Faq from './components/Faq';
import Help from './components/Help';
import Error from './components/Error';
import BlogPage from './components/BlogPage';
import Sales from './components/Sales';
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
