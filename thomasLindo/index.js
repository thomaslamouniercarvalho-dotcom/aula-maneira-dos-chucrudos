import http from 'http';
import { route } from './route.js';

const servidor = http.createServer(route)

servidor.listen(3000, () =>{
    console.log("running http://localhost:3000")
})