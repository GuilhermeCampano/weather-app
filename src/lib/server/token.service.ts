import { SignJWT, jwtVerify } from 'jose';
import { PRIVATE_SECRET_KEY } from '$env/static/private';

const JWT_ALGORITHM = 'HS256';
const JWT_KEY = new TextEncoder().encode(PRIVATE_SECRET_KEY);
const JWT_EXPIRATION = 60 * 15; // 15 minutes in seconds;

export async function createToken() {
  const token = await new SignJWT({ exp: Math.floor(Date.now() / 1000) + JWT_EXPIRATION })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .sign(JWT_KEY);
  return token;
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_KEY, {
      algorithms: [JWT_ALGORITHM],
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const exp = (payload as any)['exp'];
    return exp >= Math.floor(Date.now() / 1000);
  } catch (error) {
    console.log('Error verifying token', error);
    return false;
  }
}

export function extractToken(request: Request): string {
  const authHeader = request.headers.get('Authorization');
  return authHeader?.split('Bearer ')[1] || '';
}