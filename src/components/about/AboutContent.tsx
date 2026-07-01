import AboutBadge from "./AboutBadge";
import AboutStats from "./AboutStats";

export default function AboutContent() {
  return (
    <div>
      <AboutBadge />

      <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
        Passionate About
        <span className="block text-green-400">
          Cybersecurity
        </span>
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        I am passionate about Cybersecurity, Web Security, OSINT, Linux,
        Networking and Bug Bounty. I enjoy understanding how systems work,
        discovering vulnerabilities responsibly and continuously improving my
        technical skills through research and hands-on practice.
      </p>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        This website is my personal knowledge base where I document research,
        projects, write-ups and everything I learn throughout my cybersecurity
        journey.
      </p>

      <AboutStats />
    </div>
  );
}