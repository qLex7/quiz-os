import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url)); const port = +process.env.PORT || 8080;
const T = {".html":"text/html; charset=utf-8",".js":"text/javascript",".mjs":"text/javascript",".json":"application/json",".glb":"model/gltf-binary",".css":"text/css",".txt":"text/plain; charset=utf-8",".md":"text/markdown; charset=utf-8"};
http.createServer((q,r)=>{ let u=decodeURIComponent(q.url.split("?")[0]); if(u.endsWith("/")) u+="index.html"; const f=path.join(root,u);
  if(!f.startsWith(root)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){ r.writeHead(404); return r.end("404"); }
  r.writeHead(200,{"Content-Type":T[path.extname(f)]||"application/octet-stream","Cache-Control":"no-cache"}); fs.createReadStream(f).pipe(r); }
).listen(port,()=>console.log("http://localhost:"+port));
