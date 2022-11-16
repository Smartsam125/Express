const { response } = require('express')
const http = require('http'),fs= require('fs');
const serveStaticFile = (res,path,contenType,responseCode)=>{
    if(!responseCode)
    responseCode=200;
    fs.readFile(__dirname + path,(err,data)=>{
        if(err){
            //console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('500 - Internal Error');
        }else{
            res.writeHead(responseCode,{'Content-Type':contenType})
            res.end(data)

        }
    })

}

http.createServer((req,res)=>{
    const path =req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()
    switch(path){
        case '':
             serveStaticFile(res,"/public/index.html",'text/html')
             //serveStaticFile(res,'/public/images/logo512.png','image/png')
        break;
        case '/about':
            serveStaticFile(res,'/public/about.html','text/html')
            break;
        case '/image':
            serveStaticFile(res,'/public/images/logo512.png','image/png')
        break;
        default:
            serveStaticFile(res,'/public/notfound.html','text/html')
            
           
        break;
    }

}).listen(10000)