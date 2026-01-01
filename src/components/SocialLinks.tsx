import { Github, Linkedin, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 pt-6">
      {[ 
        { Icon: Github, href: "https://github.com/Riyadlussalam" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/riyadlussalam/" },
        { Icon: Instagram, href: "https://www.instagram.com/daffariyad_/" },
      ].map(({ Icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
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
