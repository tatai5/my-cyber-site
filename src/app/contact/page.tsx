import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/Footer";
import PageContainer from "@/components/common/PageContainer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageContainer>

        <section className="mx-auto max-w-6xl">

          {/* Header */}

          <div className="text-center">

            <div className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm text-green-400">
              Contact
            </div>

            <h1 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">
              Let's
              <span className="block text-green-400">
                Connect
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Have a cybersecurity discussion, collaboration,
              research idea or just want to say hello?
              Feel free to get in touch.
            </p>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {/* Email */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:border-green-400">

              <div className="text-5xl">
                📧
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                Email
              </h2>

              <p className="mt-4 text-zinc-400">
                contact@example.com
              </p>

            </div>

            {/* GitHub */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:border-green-400">

              <div className="text-5xl">
                💻
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                GitHub
              </h2>

              <p className="mt-4 text-zinc-400">
                github.com/yourusername
              </p>

            </div>

            {/* LinkedIn */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:border-green-400">

              <div className="text-5xl">
                💼
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                LinkedIn
              </h2>

              <p className="mt-4 text-zinc-400">
                linkedin.com/in/yourprofile
              </p>

            </div>

            {/* Location */}

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:border-green-400">

              <div className="text-5xl">
                🌍
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white">
                Location
              </h2>

              <p className="mt-4 text-zinc-400">
                West Bengal, India
              </p>

            </div>

          </div>

          {/* Contact Form */}

          <div className="mt-24 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10">

            <h2 className="text-3xl font-bold text-white">
              Send a Message
            </h2>

            <p className="mt-4 text-zinc-400">
              This form is currently a UI placeholder.
              Backend integration will be added later.
            </p>

            <form className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-green-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-green-400"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-green-400"
              />

              <button
                type="submit"
                className="rounded-xl bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400"
              >
                Send Message
              </button>

            </form>

          </div>

        </section>

      </PageContainer>

      <Footer />
    </>
  );
}