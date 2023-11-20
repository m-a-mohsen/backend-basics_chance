import { createServer } from "node:http";
import Chance from "chance";

export const PORT = 8000;
const chance = new Chance();

export const server = createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/')
        res.statusCode = 200
        res.end(
          `Hello, my name is ${chance.first()} and I am ${chance.age()} years old. I am a ${chance.profession()}.`
        );
    }
})
