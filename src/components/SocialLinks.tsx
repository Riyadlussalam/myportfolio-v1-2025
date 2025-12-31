import { Github, Linkedin, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 pt-6">
      {[ 
        { Icon: Github, href: "#" },
        { Icon: Linkedin, href: "#" },
        { Icon: Instagram, href: "#" },
      ].map(({ Icon, href }, i) => (
        <a
          key={i}
          href={href}
          className="w-10 h-10 flex items-center justify-center
            rounded-full border border-slate-700
            hover:bg-slate-800 hover:text-emerald-400
            hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
            transition"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
