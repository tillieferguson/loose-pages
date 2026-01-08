interface Fragment {
  id: number;
  text: string;
}

let fragments: Fragment[] = [];

export async function GET() {
  return Response.json({ fragments: [...fragments].reverse() });
}

export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text || !text.trim()) {
    return new Response(JSON.stringify({ error: "Missing text" }), {
      status: 400,
    });
  }

  const fragment: Fragment = {
    id: Date.now(),
    text: text.trim(),
  };

  fragments.push(fragment);

  return Response.json({ fragment }, { status: 201 });
}

