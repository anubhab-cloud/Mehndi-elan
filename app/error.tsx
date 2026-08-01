"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App boundary error caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div
        className="max-w-md w-full text-center p-8 rounded-2xl luxury-card"
        style={{
          background: "rgba(253, 248, 242, 0.95)",
          border: "1px solid rgba(201, 168, 76, 0.3)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{
            background: "linear-gradient(135deg, rgba(107, 29, 42, 0.1), rgba(107, 29, 42, 0.03))",
            border: "1px solid rgba(201, 168, 76, 0.3)",
          }}
        >
          <span className="font-display text-2xl text-maroon">M</span>
        </div>

        <h1 className="font-display font-semibold text-2xl text-maroon-dark mb-3">
          Something Went Wrong
        </h1>
        <p className="text-sm font-body text-brown/70 mb-6 leading-relaxed">
          We encountered an issue displaying this page. Please try again or return to our homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => reset()} className="btn-primary text-xs py-3 px-6">
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <Link href="/" className="btn-secondary text-xs py-3 px-6">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
