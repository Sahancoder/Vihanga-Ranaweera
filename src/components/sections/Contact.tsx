import { site } from "@/data/site";

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-line px-4 pb-12 pt-28 sm:px-6 lg:px-8"
    >
      <div className="ambient-glow absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <p className="mb-6 font-display text-xs uppercase tracking-[0.25em] text-muted">
          <span className="opacity-50 mr-1">//</span> Let&apos;s collaborate
        </p>

        <h2 className="text-center font-display text-5xl font-extrabold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
          LET&apos;S WORK
          <br />
          TOGETHER
        </h2>

        <a
          href={`mailto:${site.email}`}
          className="mt-12 rounded-sm bg-accent px-10 py-5 font-display text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-black"
        >
          Contact me
        </a>

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
