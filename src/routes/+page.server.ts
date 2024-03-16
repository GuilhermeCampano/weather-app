import { createToken } from "$lib/server/token.service";

export async function load() {
  const token = createToken();
  console.log('load token', token);
  return {
    props: { token }
  }
}
