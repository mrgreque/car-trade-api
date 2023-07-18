export interface ITokenHandler {
  generate: (key: string, expirationInMs: number) => Promise<string>;
  verify: (token: string) => Promise<string>;
}
