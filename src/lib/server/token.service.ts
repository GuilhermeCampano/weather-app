import { PRIVATE_SECRET_KEY } from '$env/static/private';
import HmacSHA256 from 'crypto-js/hmac-sha256';

export class TokenService {
  static readonly timestamp: string = Date.now().toString();

  static createSignature() {
    const hash = HmacSHA256(this.timestamp, PRIVATE_SECRET_KEY);
    return hash.toString();
  }

  static verifySignature(signature: string) {
    const calculatedSignature = this.createSignature();
    return signature === calculatedSignature;
  }
}