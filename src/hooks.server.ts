import { PRIVATE_TEST_API } from "$env/static/private";
import { autocompleteMockResponse } from "$lib/mocks/autocomplete.mock";
import { forecastMockResponse } from "$lib/mocks/forecast.mock";
import { verifyToken } from "$lib/server/token.service";

export async function handle({ event, resolve }) {
  const { request } = event;

  if (!isApiRequest(request)) { return resolve(event); }
  if (!validReferer(request)) { return new Response('Unauthorized: Invalid origin', { status: 403 }); }

  const token = extractToken(request);

  if (!token) { return new Response('Unauthorized: Missing token', { status: 401 }); }
  const isTokenValid = await verifyToken(token);
  if (!isTokenValid) { return new Response('Unauthorized: Invalid token', { status: 403 }); }

  
  if (PRIVATE_TEST_API === 'TRUE') {
    console.log('Mocking API response');
    return mockAPIResponse(request);
  }


  return resolve(event);
}

function isApiRequest(request: Request): boolean {
  return request.url.includes('/api/');
}

function extractToken(request: Request): string {
  const authHeader = request.headers.get('Authorization');
  return authHeader?.split('Bearer ')[1] || '';
}

function validReferer(request: Request): boolean {
  let referer = request.headers.get('Referer');
  const serverOrigin = new URL(request.url).origin;
  if (referer?.endsWith('/')) {
    referer = referer.slice(0, -1);
  }
  return referer === serverOrigin;
}

function mockAPIResponse(request: Request): Response{
  const status200 = { status: 200 };
  if (request.url.includes('/api/forecast')) {
    return new Response(JSON.stringify(forecastMockResponse), status200);
  }  
  if (request.url.includes('/api/autocomplete')) {
    return new Response(JSON.stringify(autocompleteMockResponse), status200);
  }
  if(request.url.includes('/api/geolocation')) {
    return new Response(JSON.stringify({}), status200);
  }
  return new Response('Not found', { status: 404 });
}