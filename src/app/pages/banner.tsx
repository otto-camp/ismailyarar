import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-fit mx-auto flex items-center justify-center overflow-hidden border border-emerald-700 rounded-full py-2.5 px-3.5 mb-2 flex-wrap gap-x-4">
      <p className="text-sm text-stone-700">
        If you want to use this page
      </p>
      <Link
        href="/contact"
        className="flex-none rounded-full bg-slate-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        Contact
      </Link>
    </div>
  );
}
