"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../globals.css";

interface Fragment {
  id: number;
  text: string;
  location?: string | null;
}

export default function ReadPage() {
  const [fragments, setFragments] = useState<Fragment[]>([]);
  const [current, setCurrent] = useState<Fragment | null>(null);

  function pickRandom(list: Fragment[]) {
    if (!list.length) return null;
    return list[Math.floor(Math.random() * list.length)];
  }

  async function loadFragments() {
    const res = await fetch("/api/fragments");
    const data = await res.json();
    setFragments(data.fragments || []);
    setCurrent(pickRandom(data.fragments || []));
  }

  useEffect(() => {
    loadFragments();
  }, []);

  return (
    <main className="lp-root">
      <div className="lp-card lp-title-card">
        <div className="lp-tape" />
        <h1 className="lp-title">Loose fragments</h1>
      </div>

      <section className="lp-card lp-fragment-card">
        {current ? (
          <>
            <p className="lp-fragment-text">{current.text}</p>
            {current.location ? (
              <p className="lp-fragment-text muted">— {current.location}</p>
            ) : null}
          </>
        ) : (
          <p className="lp-fragment-text muted">
            No fragments yet. Maybe you should leave the first one.
          </p>
        )}

        <button
          className="lp-button"
          onClick={() => setCurrent(pickRandom(fragments))}
          disabled={!fragments.length}
        >
          Show me another
        </button>

        <Link href="/submit" className="lp-link small">
          Leave one of your own →
        </Link>

        <Link href="/" className="lp-link small">
          ← back home
        </Link>
      </section>
    </main>
  );
}
