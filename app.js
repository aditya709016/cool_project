const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats/new") {
         fs.readFile('cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
     }  
    else if (request.url === "/cars") {
         fs.readFile('cars.html',  function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
     }
    else if (request.url === "/cars/new") {
         fs.readFile('newCar.html',  function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
     }
          else if(request.url === '/images/car0.jpg'){
    fs.readFile('./images/car0.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
       else if(request.url === '/images/car1.jpg'){
    fs.readFile('./images/car1.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
       else if(request.url === '/images/car2.jpg'){
    fs.readFile('./images/car2.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else if(request.url === '/cats'){
    fs.readFile('./images/cat.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
    else {
        response.end('File not found!!!');
    }
});

server.listen(process.env.PORT || 8000, function(){
    console.log(`Server listening up`)
  })