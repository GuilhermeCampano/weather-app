import { TokenService } from '$lib/server/token.service';

export async function handle({ event, resolve }) {
  const { request } = event;

  if (!isApiRequest(request)) return resolve(event);

  const token = extractToken(request);

  if (!token) return new Response('Unauthorized: Missing token', { status: 401 });

  if (!TokenService.verifySignature(token)) return new Response('Unauthorized: Invalid token', { status: 403 });

  return resolve(event);
}

function isApiRequest(request: Request): boolean {
  return request.url.includes('/api/');
}

function extractToken(request: Request): string {
  const authHeader = request.headers.get('Authorization');
  return authHeader?.split('Bearer ')[1] || '';
}