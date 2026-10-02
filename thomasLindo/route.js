import { pageAlunos, pageContato, pageCursos, pageHome, pageNOTFOUND } from "./view.js";

export function route(req,res) {
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(pageHome())
        return;
    }
    if(req.method === "GET" && req.url === "/contato"){
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(pageContato())
        return;
    }
    if(req.method === "GET" && req.url === "/alunos"){
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(pageAlunos())
        return;
    }
    if(req.method === "GET" && req.url === "/cursos"){
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(pageCursos())
        return;
    }
    res.writeHead(404, {"Content-Type": "text/html"})
    res.end(pageNOTFOUND())
}