import { PRIVATE_MOCK_API } from "$env/static/private";
import { autocompleteMockResponse } from "$lib/mocks/autocomplete.mock";
import { forecastMockResponse } from "$lib/mocks/forecast.mock";
import { geolocationDetailsMockResponse } from "$lib/mocks/geolocation.mock";
import { Endpoints } from "$lib/models";
import { verifyToken } from "$lib/server/token.service";


export async function handle({ event, resolve }): Promise<Response> {
  if (!event.request.url.includes('/api/')) {
    return await resolve(event);
  }

  const token = extractToken(event.request);

  if (!token) { 
    return new Response('Unauthorized: Missing token', { status: 401 }); 
  }
  const isTokenValid = await verifyToken(token);
  if (!isTokenValid) { 
    return new Response('Unauthorized: Invalid token', { status: 403 }); 
  }


  if (PRIVATE_MOCK_API.toLocaleUpperCase() === 'TRUE') {
    console.log('Mocking API response');
    return mockAPIResponse(event.request);
  }

  return await resolve(event);
}

function extractToken(request: Request): string {
  const authHeader = request.headers.get('Authorization');
  return authHeader?.split('Bearer ')[1] || '';
}

// function validReferer(request: Request): boolean {
//   let referer = request.headers.get('Referer');
//   const serverOrigin = new URL(request.url).origin;
//   if (referer?.endsWith('/')) {
//     referer = referer.slice(0, -1);
//   }
//   return referer === serverOrigin;
// }

function mockAPIResponse(request: Request): Response {
  const status200 = { status: 200 };
  if (request.url.includes(Endpoints.FORECAST)) {
    return new Response(JSON.stringify(forecastMockResponse), status200);
  }
  if (request.url.includes((Endpoints.AUTOCOMPLETE))) {
    return new Response(JSON.stringify(autocompleteMockResponse), status200);
  }
  if (request.url.includes((Endpoints.GEOLOCATION))) {
    return new Response(JSON.stringify(geolocationDetailsMockResponse), status200);
  }
  return new Response('Not found', { status: 404 });
}