import { TokenService } from "$lib/server/token.service";

export async function load() {
  const tokenService = new TokenService();
  const token = tokenService.createToken();
  return {
    props: { token }
  }
}
