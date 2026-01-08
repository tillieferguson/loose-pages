import Link from "next/link";
import "../globals.css";

export default function AboutPage() {
  return (
    <main className="lp-root">
      <div className="lp-card lp-title-card">
        <div className="lp-tape" />
        <h1 className="lp-title">What is this?</h1>
      </div>

      <section className="lp-card lp-about-card">
        <p>
          Loose Pages is a queer fragment zine: a tiny anonymous box of
          unfinished stories, overheard lines, and soft drama.
        </p>
        <p>
          Leave a fragment. Take a fragment. Treat it like a page torn from a
          notebook or a note left in a library book.
        </p>
        <p>
          There&apos;s no algorithm here — just whatever your hand decides to put on
          the page.
        </p>

        <Link href="/" className="lp-link small">
          ← back home
        </Link>
      </section>
    </main>
  );
}

