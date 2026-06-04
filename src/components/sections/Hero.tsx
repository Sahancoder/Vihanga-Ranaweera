import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-20">
      {/* Art-directed background portrait */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-web.png"
          alt={`${site.name} — portrait`}
          fill
          preload
          sizes="100vw"
          className="hidden object-cover object-top md:block"
        />
        <Image
          src="/images/hero/hero-mobile.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top md:hidden"
        />

        {/* Legibility overlays: top-fade on mobile, left-fade on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/10 to-transparent md:bg-gradient-to-r md:from-bg/95 md:via-bg/55 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent md:h-1/3" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-start px-4 pb-20 pt-28 sm:px-6 md:justify-center lg:px-8">
        <div className="max-w-2xl">
          {/* Availability pill */}
          {site.available ? (
            <div className="mb-6 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-xs uppercase tracking-[0.25em] text-muted">
                Available for work
              </span>
            </div>
          ) : null}

          {/* Name */}
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>

          {/* Role */}
          <div className="mt-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-accent" />
            <p className="font-display text-sm uppercase tracking-wider text-muted sm:text-base">
              {site.role} · {site.location}
            </p>
          </div>

          {/* Tagline */}
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {site.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-accent px-8 py-4 font-display text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Contact me
            </a>
            <a
              href="#work"
              className="rounded-sm border border-line px-8 py-4 font-display text-xs font-bold uppercase tracking-widest text-white/90 transition-all hover:border-white/40 hover:bg-white/5"
            >
              View work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
