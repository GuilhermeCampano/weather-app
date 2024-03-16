import { PRIVATE_SECRET_KEY } from '$env/static/private';
import HmacSHA256 from 'crypto-js/hmac-sha256';

const timestamp = Date.now().toString();

export function createSignature() {
  const hash = HmacSHA256(timestamp, PRIVATE_SECRET_KEY);
  return hash.toString();
}

export function verifySignature(signature: string) {
  const calculatedSignature = createSignature();
  return signature === calculatedSignature;
}
