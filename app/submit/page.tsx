"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import "../globals.css";

export default function SubmitPage() {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");

    const trimmed = text.trim();
    if (!trimmed) {
      setStatus("Write something first.");
      return;
    }

    try {
      const res = await fetch("/api/fragments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: trimmed, location }),
      });

      if (!res.ok) {
        setStatus("Something went wrong. Try again.");
        return;
      }

      setText("");
      setLocation("");
      setStatus("Fragment saved. Thank you. ✶");
    } catch {
      setStatus("Network error. Try again.");
    }
  }

  return (
    <main className="lp-root">
      <div className="lp-card lp-title-card">
        <div className="lp-tape" />
        <h1 className="lp-title">Leave a fragment</h1>
      </div>

      <form onSubmit={handleSubmit} className="lp-card lp-form-card">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="lp-input"
          type="text"
          placeholder="Neighborhood or city (optional)"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="lp-textarea"
          rows={5}
          placeholder={`Something overheard, unfinished, a little dramatic.\n\n"She stole my lighter and I think it means something."`}
        />

        <button type="submit" className="lp-button">
          Drop it in the pile
        </button>

        {status && <p className="lp-status">{status}</p>}

        <Link href="/" className="lp-link small">
          ← back home
        </Link>
      </form>
    </main>
  );
}
