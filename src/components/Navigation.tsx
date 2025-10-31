import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent"
      ].join(" ")}
    >
      <div
        className={[
          "max-w-7xl mx-auto px-6 flex items-center justify-between transition-transform origin-left",
          scrolled ? "scale-[0.92] py-2" : "scale-100 py-4"
        ].join(" ")}
      >
        <a
          href="#top"
          className={[
            "flex items-center gap-2 font-bold",
            scrolled ? "text-xl" : "text-2xl",
            "bg-gradient-to-tr from-blue-600 via-purple-400 to-blue-600 bg-clip-text text-transparent"
          ].join(" ")}
        >
          🧘 QuietSpace
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center font-medium text-white/90">
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#plans" className="hover:text-white transition">Plans</a>
          <a href="#get-started" className="hover:text-white transition">Get Started</a>
          <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link to="/automations" className="hover:text-white transition">Automations</Link>
          <Link to="/insights" className="hover:text-white transition">AI Insights</Link>
          <Link to="/settings" className="hover:text-white transition">Settings</Link>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-white/10 text-white transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col">
            <a href="#how-it-works" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>How It Works</a>
            <a href="#features" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>Features</a>
            <a href="#plans" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>Plans</a>
            <a href="#get-started" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>Get Started</a>
            <Link to="/dashboard" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>Dashboard</Link>
            <Link to="/automations" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>Automations</Link>
            <Link to="/insights" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>AI Insights</Link>
            <Link to="/settings" className="px-2 py-3 text-white/90 hover:text-white" onClick={()=>setOpen(false)}>Settings</Link>
          </div>
      </div>
      )}
    </nav>
  );
}
