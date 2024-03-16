import { verifySignature} from '$lib/server/token.service';

export async function handle({ event, resolve }) {
  const request = event.request;
  
  if(!request.url.includes('/api/')) {
    return resolve(event);
  }

  const authHeader = request.headers.get('Authorization');
  const signature = authHeader?.split('Bearer ')[1] as string;

  if (!verifySignature(signature)){
    return new Response('Invalid token', { status: 401 });
  }

  return resolve(event);
}