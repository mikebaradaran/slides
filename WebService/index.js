var http= require("http");
 
http.createServer(function(req, res){
    var pg = req.url.toLowerCase().split('/')[1];
    res.writeHead(301, {"location" : "http://qa.somee.com/html/slides/demolatest.html?page="+pg});
    //res.writeHead(301, {"location" : "http://localhost:3030/demo.html?page="+pg});
    res.end();
}).listen(3030, "127.0.0.1");
 
console.log("server redirects from localhost 3030");
