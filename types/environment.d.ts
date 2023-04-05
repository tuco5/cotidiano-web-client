export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_AUTH_CLIENT_ID: string;
      GOOGLE_AUTH_CLIENT_SECRET: string;
      MONGODB_URI: string;
      DB_NAME: string;
    }
  }
}
