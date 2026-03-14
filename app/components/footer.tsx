import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="size-6 purple-gradient-bg rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined !text-sm">code</span>
            </div>
            <span className="font-bold">Alex Rivera</span>
          </div>
          <p className="text-slate-500 text-sm" style={{ color: "#666666" }}>
            © 2024 Alex Rivera. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            className="text-slate-500 hover:text-accent-purple transition-colors"
            href="#"
            style={{ color: "#666666" }}
          >
            <span className="material-symbols-outlined">language</span>
          </Link>
          <Link
            className="text-slate-500 hover:text-accent-purple transition-colors"
            href="#"
            style={{ color: "#666666" }}
          >
            <span className="material-symbols-outlined">terminal</span>
          </Link>
          <Link
            className="text-slate-500 hover:text-accent-purple transition-colors"
            href="#"
            style={{ color: "#666666" }}
          >
            <span className="material-symbols-outlined">alternate_email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
