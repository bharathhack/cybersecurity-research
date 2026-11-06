import MagneticName from "../components/MagneticName";
import Projects from "../components/Projects";
import Skills from "../components/skills";
import Certifications from "../components/certification";
import  Contact  from "../components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-8 py-7 flex justify-between items-center border-b border-white/10">
        <div className="text-xl font-bold">
          <span className="text-blue-500">&gt;_</span> Bharath kumar.
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#writeups" className="hover:text-blue-400">Writeups</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-8 py-32">

        <p className="text-blue-400 text-sm tracking-[0.3em] mb-6">
          CYBERSECURITY RESEARCHER
        </p>

        <p className="text-gray-400 mb-3 text-xl">
          Hello, I'm
        </p>

        <MagneticName />

        <h2 className="text-xl md:text-2xl text-blue-300 mt-6 font-medium">
  Cybersecurity Researcher | Offensive Security | VAPT
</h2>

<p className="text-gray-400 max-w-2xl mt-6 leading-8">
  Focused on offensive security, vulnerability assessment,
  penetration testing and security research. Exploring
  real-world attack techniques, identifying security
  weaknesses and documenting technical discoveries.
</p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#writeups"
            className="bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-lg font-medium transition">
            Explore Writeups →
          </a>

          <a href="#contact"
            className="border border-white/20 hover:border-blue-500 px-7 py-3 rounded-lg transition">
            Contact Me
          </a>
        </div>

      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-16 border-t border-white/10">
        <p className="text-blue-400 text-sm mb-4">01 / ABOUT</p>
        <h2 className="text-3xl font-bold">Learning. Exploring. Securing.</h2>
       <p className="text-gray-400 mt-5 max-w-2xl leading-8">
  I am an aspiring cybersecurity researcher passionate
  about offensive security, penetration testing,
  vulnerability discovery and network security.
  I continuously develop my skills through hands-on
  security labs, CTF challenges and practical research.
</p>
      </section>

      {/* Writeups */}
      <section id="writeups" className="max-w-6xl mx-auto px-8 py-16 border-t border-white/10">
        <p className="text-blue-400 text-sm mb-4">02 / WRITEUPS</p>
        <h2 className="text-3xl font-bold">Technical Writeups</h2>
        <p className="text-gray-400 mt-4">
          Practical lab notes, CTF walkthroughs and security research.
        </p>
      </section>

      <Projects />

      <Skills />

      <Certifications />
       

      
    <Contact />
      

      <footer className="text-center text-gray-500 py-8 border-t border-white/10 text-sm">
        © 2026 Bharath Kumar L. | Built with Next.js
      </footer>

    </main>
  );
}