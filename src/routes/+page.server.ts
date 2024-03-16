import { TokenService } from "$lib/server/token.service";

export async function load(){
  const token = TokenService.createSignature();
  return {
    props: { token }
  }
}
