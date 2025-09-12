import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import Marketplace from "@/react-app/pages/Marketplace";
import AIAssistants from "@/react-app/pages/AIAssistants";
import Blog from "@/react-app/pages/Blog";
import About from "@/react-app/pages/About";
import Contact from "@/react-app/pages/Contact";

export default function App() {
  return (
    <Router basename="/nobel_sea/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/ai-assistants" element={<AIAssistants />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
