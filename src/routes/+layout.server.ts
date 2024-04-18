import { createToken } from "$lib/server/token.service";

export async function load(): Promise<{ token: string }> {
  const token = await createToken();
  console.log('Loaded Token', token);
  return { token };
}
