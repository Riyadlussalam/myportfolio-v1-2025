export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-4">
        <p className="text-slate-400 italic">
          “Leadership is not a position, but a responsibility.”
        </p>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} M. Daffa Riyadlussalam · President of BEM
          FILKOM UB 2026
        </p>
      </div>
    </footer>
  );
}
