import * as z from 'zod';

export const cookiesSchema = z.object({
    name: z.enum(['access_token', 'refresh_token']),
    value: z.string()
});

export type CookiesSchema = z.infer<typeof cookiesSchema>;
