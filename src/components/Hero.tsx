export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-400">
          Cyber Journal
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          My Cybersecurity Research & Bug Bounty Notes
        </p>

        <button className="mt-8 rounded-lg bg-green-500 px-8 py-3 font-semibold text-black hover:bg-green-400 transition">
          Explore Research
        </button>
      </div>
    </section>
  );
}