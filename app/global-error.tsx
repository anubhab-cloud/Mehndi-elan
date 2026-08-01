"use client";

import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FDF8F2] text-[#3D2B1F] antialiased min-h-screen flex items-center justify-center p-4">
        <div
          className="max-w-md w-full text-center p-8 rounded-2xl"
          style={{
            background: "rgba(253, 248, 242, 0.95)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
            boxShadow: "0 20px 60px rgba(58, 20, 10, 0.12)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, rgba(107, 29, 42, 0.1), rgba(107, 29, 42, 0.03))",
              border: "1px solid rgba(201, 168, 76, 0.3)",
            }}
          >
            <span className="font-serif text-2xl text-[#6B1D2A]">M</span>
          </div>

          <h1 className="font-serif font-semibold text-2xl text-[#4A1020] mb-3">
            Something Went Wrong
          </h1>
          <p className="text-sm font-sans text-[#3D2B1F]/70 mb-6 leading-relaxed">
            An unexpected error occurred while loading this page. Please try refreshing or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-wider bg-[#6B1D2A] text-[#E8C86D] hover:bg-[#4A1020] transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-wider border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#4A1020] transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
