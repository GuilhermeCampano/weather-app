import jwt from 'jsonwebtoken';
import { PRIVATE_SECRET_KEY } from '$env/static/private';

export function createToken(): string {
  const expiration15minutes = Math.floor(Date.now() / 1000) + 60 * 15;

  const token = jwt.sign({
    expiration: expiration15minutes,
  }, PRIVATE_SECRET_KEY);
  return token;
}

export function verifyToken(token: string): boolean {
  try {
    const { expiration } = jwt.verify(token, PRIVATE_SECRET_KEY) as { expiration: number };
    return expiration >= Math.floor(Date.now() / 1000);
  } catch (error) {
    console.log('Error verifying token', error);
    return true;
  }
}

