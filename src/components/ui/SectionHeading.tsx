type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-accent">
        //{eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
