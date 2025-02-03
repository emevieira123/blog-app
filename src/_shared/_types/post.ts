import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, { message: "Campo obrigatório" }),
  author: z.string().min(1, { message: "Campo obrigatório" }),
  summary: z.string().min(1, { message: "Campo obrigatório" }),
  content: z.string().min(1, { message: "Campo obrigatório" }),
  date: z
    .string()
    .default(() => new Date().toISOString().slice(0, 10))
    .optional(),
});

export type PostRequest = z.infer<typeof postSchema>;

export const postDefaultValues: PostRequest = {
  title: "",
  author: "",
  summary: "",
  content: "",
};

export const post = postSchema.extend({
  id: z.string(),
});

export type Post = z.infer<typeof post>;
