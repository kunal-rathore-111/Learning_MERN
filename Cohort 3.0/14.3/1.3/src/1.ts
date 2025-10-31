
import express from "express";
import { z, type Schema } from 'zod';
const app = express();

const schema = z.object({
    email: z.string(),
    username: z.minLength(3, { message: "length is less than 3" })
});

// I can use this zod schema as a type in tsc
// use to send the schema to send to frontend for form inputs validation
export type Users = z.infer<typeof schema>; // export to frontend form validation

app.post('/', (req, res) => {
    const { success } = schema.safeParse(req.body);
    if (success) {
        // do db call or etc
    }
})

