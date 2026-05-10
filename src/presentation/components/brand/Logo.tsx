export interface LogoMarkProps {
  size?: number;
}

export function LogoMark(props: LogoMarkProps) {
  const s = () => props.size ?? 44;

  return (
    <div
      class="flex items-center justify-center bg-linear-to-br from-navy-900 to-navy-700 shadow-md relative overflow-hidden"
      style={{ width: `${s()}px`, height: `${s()}px`, "border-radius": `${s() * 0.27}px` }}
      aria-hidden="true"
    >
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_110%,rgba(201,151,37,0.55),transparent_60%)]" />
      <span class="relative z-10 font-display font-extrabold text-white" style={{ "font-size": `${s() * 0.42}px` }}>
        D
      </span>
    </div>
  );
}

export interface LogoProps {
  name?: string;
  tagline?: string;
  markSize?: number;
}

export function Logo(props: LogoProps) {
  const name = () => props.name ?? "DUMMY LMS";
  const tagline = () => props.tagline ?? "Learning Platform";

  return (
    <div class="flex items-center gap-3">
      <LogoMark size={props.markSize} />
      <div class="font-display font-extrabold text-base text-navy-900 tracking-tight leading-tight">
        {name()}
        <small class="block font-sans font-medium text-[10.5px] text-green-600 tracking-widest uppercase">
          {tagline()}
        </small>
      </div>
    </div>
  );
}
