import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-24">
      <div
        className="max-w-md w-full text-center p-8 md:p-12 rounded-2xl luxury-card"
        style={{
          background: "rgba(253, 248, 242, 0.95)",
          border: "1px solid rgba(201, 168, 76, 0.3)",
        }}
      >
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-3">
          404 Error
        </p>
        <h1 className="font-display font-semibold text-4xl text-maroon-dark mb-4">
          Page Not Found
        </h1>
        <div
          className="h-px max-w-[80px] mx-auto mb-6"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          aria-hidden="true"
        />
        <p className="text-sm font-body text-brown/65 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us guide you back to our luxury mehndi collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary text-xs py-3.5 px-6">
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <Link href="/gallery" className="btn-secondary text-xs py-3.5 px-6">
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
