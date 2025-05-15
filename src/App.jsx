import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  console.log("EmailJS Service ID:", import.meta.env.VITE_APP_EMAILJS_SERVICE_ID);
  console.log("EmailJS Template ID:", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);
  console.log("EmailJS Template ID:", import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID);

  console.log("EmailJS Public Key:", import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
