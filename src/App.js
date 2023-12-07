import About from "./Components/About";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialIcons from "./Components/SocialIcons";
import Specialization from "./Components/Specialization";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Specialization />
      <Contact />
      <Footer />
      <SocialIcons />
    </div>
  );
}

export default App;
