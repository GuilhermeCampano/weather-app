import crypto from 'crypto';
import { PRIVATE_HMAC_SECRET_KEY } from '$env/static/private';

const timestamp = Date.now().toString();

export function createSignature() {
  const hmac = crypto.createHmac('sha256', PRIVATE_HMAC_SECRET_KEY);
  hmac.update(timestamp.toString());
  return hmac.digest('hex');
}

export function verifySignature(signature: string) {
  const calculatedSignature = createSignature();
  return signature === calculatedSignature;
}
