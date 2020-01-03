const fs = require('fs');
const http = require('http');
const url = require('url');


//create server and save into a const
const server = http.createServer((req,res) =>{
 console.log(req.url);

 const pathName = req.url;

 if(pathName === '/' || pathName === '/overview') {
  res.end('This is the overview')
 } else if (pathName === '/product'){
  res.end('This is the product');
 } else if (pathName === '/api') {
 
  // read the json file
  fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
   const productData = JSON.parse(data);
   // console.log(productData); 
   res.writeHead(200, { 'Content-type': 'application/json' });
   res.end(data);
  });


 } else {
  //headers aways on top,then res
  res.writeHead(404, {
   'Content-type': 'text/html',
   'my-own-header': 'oops I did it again'
  });
  res.end('<h1>Page not found</h1>');
 }

 res.end('Hello from the server');
});

//now use the server and cosole a msg the server has started
//start by running node index.js in terminal
//listening for incoming requests from localhost:8000
server.listen(8000, '127.0.0.1', () => {
 console.log('Server is up and running on 8000');//msg in terminal
});

//ctrlD exits REPL
//ctrlC to exit the node program

//ROUTING gets very complicated in large projects so Express is used, but for this small project we will not.
