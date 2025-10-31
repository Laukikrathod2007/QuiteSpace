import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-black px-4 md:px-20"
      id="hero"
    >
      {/* Left: Headline & CTA */}
      <div className="flex-1 flex flex-col items-start justify-center text-left z-10 py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
          QuietSpace <br />
          <span className="text-teal-400">Reclaim Your Focus</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-lg">
          Track focus sessions, block distractions, and cultivate mindful productivity.
        </p>
        <Link to="/pricing">
          <button className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition text-lg">
            JOIN US NOW
          </button>
        </Link>
      </div>
      {/* Right: Spline */}
      <div className="flex-1 w-full max-w-xl md:max-w-2xl xl:max-w-3xl flex justify-center items-center py-12">
        <iframe
          src="https://my.spline.design/reactiveorb-MaEIJTj0Lxj1mqcQ6xWQtjgN/"
          frameBorder="0"
          width="100%"
          height="500"
          className="rounded-lg overflow-hidden shadow-2xl"
          style={{ minHeight: 370, background: "transparent" }}
          title="QuietSpace 3D Hero"
          allowFullScreen
        />
      </div>
    </section>
  );
}
