import { createToken } from "$lib/server/token.service";

export async function load() {
  const token = createToken();
  return {
    props: { token }
  }
}
