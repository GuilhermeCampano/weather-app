import { TokenService } from "$lib/server/token.service";

export async function load() {
  const tokenService = new TokenService();
  return {
    props: { token: tokenService.createToken() }
  }
}
