import { createToken } from "$lib/server/token.service";

export async function load() {
  const token = await createToken();
  console.log('Loaded Token', token);
  return {
    props: { token }
  }
}
