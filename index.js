import { server, PORT } from "./server.js";

server.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})
