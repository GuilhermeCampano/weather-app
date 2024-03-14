export async function GET({url}: {url: URL}): Promise<Response> {
  console.log('GET /random', url);
  const random = Math.random();
  return new Response(random.toString(), { status: 200 });
}