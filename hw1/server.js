const http = require('http');
const fs = require('fs');
const path = require('path');
const { readFile, writeFile } = require('./fileManager');

const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'data.txt');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my first Node.js server!');
    } 
    
    else if (req.url === '/file' && req.method === 'GET') {
        readFile(FILE_PATH)
            .then(data => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            })
            .catch(() => {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('File not found');
            });
    } 
    
    else if (req.url === '/file' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            writeFile(FILE_PATH, body)
                .then(() => {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('File updated successfully');
                })
                .catch(() => {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error writing file');
                });
        });
    } 
    
    else if (req.url === '/time' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(new Date().toLocaleTimeString());
    } 
    
    else if (req.url === '/date' && req.method === 'GET') {
        const date = new Date().toISOString().split('T')[0];
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(date);
    } 
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404: Page not found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
