import "server-only";

export const required = (value: string | undefined, name: string): string => {
  if (!value) throw new Error(`❌ Environment variable ${name} is missing!`);
  return value;
};

export const serverEnv = {
  resendApiKey: required(process.env.RESEND_API_KEY, "RESEND_API_KEY"),
} as const;
