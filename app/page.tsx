import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <main className="lp-root">
      <div className="lp-card lp-title-card">
        <div className="lp-tape" />
        <h1 className="lp-title">
          Loose
          <br />
          Pages
        </h1>
      </div>

      <div className="lp-card lp-sub-card">
        <div className="lp-tape" />
        <p className="lp-subtitle">A queer fragment zine.</p>
      </div>

      <div className="lp-actions">
        <Link href="/submit" className="lp-button">
          Leave a fragment
        </Link>
        <Link href="/read" className="lp-button lp-button-outline">
          Read fragments
        </Link>
        <Link href="/about" className="lp-link">
          About
        </Link>
      </div>
    </main>
  );
}

