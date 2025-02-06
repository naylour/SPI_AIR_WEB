import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().email({
        message: 'Введите валидный формат почты'
    }),
    password: z.string().min(6, {
        message: 'минимальная длина пароля'
    })
});

export type LoginSchema = z.infer<typeof loginSchema>;
