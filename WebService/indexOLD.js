const server = require('http').createServer();

server.on('request', (req, res) => {

    //res.setHeader("Access-Control-Allow-Origin", "*");

    //var url = req.url.toLowerCase().split('/');
    var url = 'http://localhost:5000/demo.html'; 
    // ?page=' + url[1];
    console.log(url);
    res.writeHead(301,  {Location: url});
    res.end();
});

server.listen(5000, () => console.log('Server is serving now on port 5000!\n' ));

// var writeResponse = function(res, str) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(str);
// }
// var writeJsonResponse = function(res, str) {
//     writeResponse(res, JSON.stringify(str));
// }

// var writeHelp = function(res) {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end(apis);
// }

// var notFound = function(res) {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end("The data you have requested could not be found");
// }

