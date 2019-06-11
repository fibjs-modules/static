#!/usr/bin/env fibjs

const http = require("http");
const path = require("path");

if (argv.length < 3) {
  console.log(` A static file server.

 Help:

 static [folder] [port]

 folder : folder of the static file to be served.
 port   : static server port. Default to 8080.
`);
  process.exit(0);
}

const folder = path.resolve(argv[2]);
const port = argv[3] || 8080;

const server = new http.Server(port, http.fileHandler(folder, {}, true));

console.log(`static server is listening on: ${port}`);

server.run();
