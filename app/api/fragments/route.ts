import { sql } from "@vercel/postgres";

export const runtime = "nodejs";

export async function GET() {
  const { rows } = await sql`
    select id, text, location, created_at
    from fragments
    order by created_at desc, id desc
  `;
  return Response.json({ fragments: rows });
}

export async function POST(req: Request) {
  const { text, location } = await req.json();

  if (!text || !text.trim()) {
    return new Response(JSON.stringify({ error: "Missing text" }), {
      status: 400,
    });
  }
  const trimmed = text.trim();
  const trimmedLocation =
    typeof location === "string" && location.trim() ? location.trim() : null;
  const { rows } = await sql`
    insert into fragments (text, location)
    values (${trimmed}, ${trimmedLocation})
    returning id, text, location, created_at
  `;
  return Response.json({ fragment: rows[0] }, { status: 201 });
}
