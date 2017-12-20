var http = require('http');
var azure = require('azura-storage');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! and this is awesome');
}).listen(8080)

tableSvc.queryEntities('tenant_company',query, null, function(error, result, response) {
    if(!error) {
        console.log('read success');
      // query was successful
    }
  });

  blobSvc.createAppendBlobFromLocalFile('mycontainer', 'myappendblob', 'tenant_company', function(error, result, response){
    if(!error){
        console.log('upload success');
      // file uploaded
    }
  });