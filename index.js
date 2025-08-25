// 1. Import
import express from "express";
import http from "http";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import { fileURLToPath } from "node:url";


// 2. Instances
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 3. Serving html file
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(join(__dirname,'index.html'));
app.get('/',(req,res)=> res.sendFile(join(__dirname,'index.html')));
// 4. Define a coneection event handler
// 5. Start the server
const PORT = 3000;
server.listen(PORT,()=>console.log(`Server is up and running or Port No. ${PORT}`));