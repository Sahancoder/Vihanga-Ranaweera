import { site } from "@/data/site";

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden border-t border-line px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-25"
        >
          <source src="/vid/lets work togather .mp4" type="video/mp4" />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,4,4,0.92)_0%,rgba(5,4,4,0.58)_34%,rgba(216,48,26,0.16)_62%,rgba(5,4,4,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_38%,rgba(216,48,26,0.18),transparent_48%)] mix-blend-screen" />
      <div className="ambient-glow absolute bottom-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <p className="mb-6 font-display text-xs uppercase tracking-[0.25em] text-muted">
          <span className="mr-1 opacity-50">{"//"}</span> Let&apos;s collaborate
        </p>

        <h2 className="text-center font-display text-5xl font-extrabold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
          LET&apos;S WORK
          <br />
          TOGETHER
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-sm bg-accent px-10 py-5 font-display text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black"
          >
            Email me
          </a>
          <a
            href={site.socials.find(s => s.label === "WhatsApp")?.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-accent bg-transparent px-10 py-5 font-display text-xs font-bold uppercase tracking-widest text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-white"
          >
            WhatsApp
          </a>
        </div>

        {/* Meta row */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-8 border-b border-line pb-12 sm:grid-cols-2">
          <div className="font-display">
            <p className="text-xs uppercase tracking-widest text-muted">Based in</p>
            <p className="mt-1 text-sm font-semibold text-white">{site.location}</p>
          </div>
          <div className="font-display sm:text-right">
            <p className="text-xs uppercase tracking-widest text-muted">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm font-semibold text-white hover:text-accent"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex w-full max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-xs uppercase tracking-widest text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex items-center gap-5">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs uppercase tracking-widest text-muted transition-colors hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
