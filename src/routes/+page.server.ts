
import { createSignature } from '$lib/server/token.service';

export async function load() {
  const token = createSignature();
  return {
    props: { token }
  }
}
