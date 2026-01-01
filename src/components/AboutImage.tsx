import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative h-[520px] md:h-[640px] rounded-2xl overflow-hidden">
      <Image
        src="/images/daffa.jpg"
        alt="M. Daffa Riyadlussalam"
        fill
        priority
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMGYxNzJhIi8+PC9zdmc+"
        className="object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
    </div>
  );
}
