declare module "@gfa/gfa-infra" {
  type ParsedToken = {
    user: string;
    permissions: string[];
  }

  export class TokenAdapter {
    public static KEY_STORAGE: string;

    public get token(): string
    public removeToken(): void
    public set token(token: string)
    public get tokenIsValid(): boolean;
    public get parsedToken(): ParsedToken | undefined;
  }
}



