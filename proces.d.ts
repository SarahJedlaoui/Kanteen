declare namespace NodeJS {
    export interface ProcessEnv {
        AUTH_COGNITO_ID: string
        AUTH_COGNITO_SECRET: string
        AUTH_COGNITO_ISSUER: string
    }
}