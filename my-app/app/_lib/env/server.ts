import "server-only";

export const required = (value: string | undefined, name: string): string => {
  if (!value) throw new Error(`❌ Environment variable ${name} is missing!`);
  return value;
};

export const serverEnv = {
  postgresUrl: required(process.env.POSTGRES_URL, "POSTGRES_URL"),
  resendApiKey: required(process.env.RESEND_API_KEY, "RESEND_API_KEY"),
  sessionSecret: required(process.env.SESSION_SECRET, "SESSION_SECRET"),
} as const;
