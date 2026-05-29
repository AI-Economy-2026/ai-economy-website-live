import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8">Page not found.</p>
      <Link
        href="/"
        className="bg-[#004AAD] text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#003380] transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
